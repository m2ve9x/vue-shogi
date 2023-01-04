/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import { Lance } from '../lance'
import type { Piece } from '../piece'

describe('lance', () => {
    it('name', () => {
        const lance: Piece = new Lance();
        expect(lance.name()).toContain('香');
    })
})
