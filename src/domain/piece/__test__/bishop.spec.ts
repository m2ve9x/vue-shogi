/**
 * @jest-environment node
 */

import { describe, it, expect } from 'vitest'
import { Bishop } from '../bishop'
import type { Piece } from '../piece'

describe('bishop', () => {
    it('name', () => {
        const bishop: Piece = new Bishop();
        expect(bishop.name()).toContain('角');
    })
})
