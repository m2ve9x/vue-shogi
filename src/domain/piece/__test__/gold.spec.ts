/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import { Gold } from '../gold'
import type { Piece } from '../piece'

describe('gold', () => {
    it('name', () => {
        const gold: Piece = new Gold();
        expect(gold.name()).toContain('金');
    })
})
