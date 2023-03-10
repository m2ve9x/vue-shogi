/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import type { Piece } from '../piece'
import { Pawn } from '../pawn'

describe('pawn', () => {
    it('name', () => {
        const pawn: Piece = new Pawn();
        expect(pawn.name()).toContain('歩');
    })
})
