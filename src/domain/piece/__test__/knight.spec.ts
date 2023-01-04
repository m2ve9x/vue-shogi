/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import { Knight } from '../knight'
import type { Piece } from '../piece'

describe('Knight', () => {
    it('name', () => {
        const knight: Piece = new Knight();
        expect(knight.name()).toContain('桂');
    })
})
