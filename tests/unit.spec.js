/**
 * Unit tests.
 */

import { describe, it, expect } from "@jest/globals"

describe("Board", () => {
	it("should draw a mark on the tile the player clicked on", () => {
		//Arrange
		const board = new Board()

		//Act
		const clickedTile = board.tile.clicked()
		clickedTile.drawMark()

		//Assert
		expect(clickedTile).toBe(marked)
	})
})