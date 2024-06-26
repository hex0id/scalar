import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ScalarCodeBlock from './ScalarCodeBlock.vue'

describe('ScalarCodeBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(ScalarCodeBlock, {
      attrs: {
        content: 'console.log()',
      },
    })

    // Check the outer elements
    const pre = wrapper.find('*')
    const code = pre.find('code')

    expect(pre.element.nodeName.toLowerCase()).toBe('pre')
    expect(code.element.nodeName.toLowerCase()).toBe('code')

    // Confirm the syntax highlighting has been applied
    expect(code.html()).toBe(
      `<code class="scalar-codeblock-code language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,
    )
  })
})
