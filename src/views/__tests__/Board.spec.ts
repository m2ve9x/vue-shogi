/**
 * @jest-environment jsdom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Board from '@/views/Board.vue';


describe('Board', () => {
  it('renders properly', () => {
    const wrapper = mount(Board)
    expect(wrapper.text()).toContain('歩')
  })
})
