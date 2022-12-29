/**
 * @jest-environment jsdom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Square from '@/views/Square.vue';
import { Pawn } from '@/domain/piece/pawn';

describe('Square', () => {
    it('dont have piece', () => {
        const wrapper = mount(Square, {
            props: {
                piece: undefined
            }
        })
        expect(wrapper.text()).toContain('')
    })

    it('have piece', () => {
        const wrapper = mount(Square, {
            props: {
                piece: new Pawn()
            }
        })
        expect(wrapper.text()).toContain('歩')
    })
})
