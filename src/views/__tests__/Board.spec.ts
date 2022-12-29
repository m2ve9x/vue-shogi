/**
 * @jest-environment jsdom
 */

import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Board from '@/views/Board.vue';
import Square from '@/views/Square.vue';

describe('Board', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Board)
    expect(wrapper.findAllComponents(Square)).toHaveLength(54);
  })
})
