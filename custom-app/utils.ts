// lifted from https://github.com/fern-api/docs-custom-js-example/blob/main/custom-app/src/utils.ts

import { createRoot, type Root } from 'react-dom/client'
import React, { FunctionComponent } from 'react'

// avoid creating multiple roots for the same element
const roots = new WeakMap<HTMLElement, Root>()
function getOrCreateRoot(element: HTMLElement): Root {
    let root = roots.get(element)
    if (root == null) {
        root = createRoot(element, {
            identifierPrefix: 'custom-app',
            onRecoverableError: console.error,
        })
        roots.set(element, root)
    }
    return root
}

export function renderInContainer(Component: FunctionComponent, container: HTMLElement | null | undefined) {
    if (container != null) {
        const root = getOrCreateRoot(container)
        root.render(React.createElement(Component))
    }
}

export function onDOMContentMutate(render: () => void) {
    let hasRendered = false
    // observe DOM changes to re-render the custom header and footer
    let observations = 0

    const setupMutationObserver = () => {
        if (!hasRendered) {
            console.log("Initial render")
            render()
            hasRendered = true
        }
        new MutationObserver((e, o) => {
            for (const item of e) {
                if (item.target instanceof HTMLElement) {
                    const target = item.target
                    if (target.id === 'fern-header' || target.id === 'fern-footer') {
                        if (observations < 3) {
                            // react hydration will trigger a mutation event
                            observations++
                        } else {
                            o.disconnect()
                        }
                        break
                    }
                }
            }
        }).observe(document.body, { childList: true, subtree: true })
    }

    // if DOM is already loaded we run
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOMContentLoaded (delayed)')
            setupMutationObserver()
        })
    } else {
        console.log('DOMContentLoaded already fired')
        setupMutationObserver()
    }
}
