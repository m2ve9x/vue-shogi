/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import type { Piece } from '../piece'
import { Silver } from '../silver'

describe('Silver', () => {
    it('name', () => {
        const silver: Piece = new Silver();
        expect(silver.name()).toContain('銀');
    })
})
