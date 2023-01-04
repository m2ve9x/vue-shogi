/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import { King } from '../king'
import type { Piece } from '../piece'

describe('king', () => {
    it('name', () => {
        const king: Piece = new King();
        expect(king.name()).toContain('王');
    })
})
