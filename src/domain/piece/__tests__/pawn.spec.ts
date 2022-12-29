/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { Piece } from '../piece'
import { Pawn } from '../pawn'

describe('HelloWorld', () => {
    it('renders properly', () => {
        const pawn: Piece = new Pawn();
        expect(pawn.name()).toContain('pawn');
    })
})
