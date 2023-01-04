/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import { Rook } from '../rook'
import type { Piece } from '../piece'

describe('rook', () => {
    it('name', () => {
        const rook: Piece = new Rook();
        expect(rook.name()).toContain('飛');
    })
})
