namespace SpriteKind {
    export const Monster1 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (Monster1.isHittingTile(CollisionDirection.Right)) {
        Monster1.setVelocity(0, 20)
    }
    if (Monster1.isHittingTile(CollisionDirection.Bottom)) {
        Monster1.setVelocity(-20, 0)
    }
    if (Monster1.isHittingTile(CollisionDirection.Left)) {
        Monster1.setVelocity(0, -20)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    music.setVolume(255)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Princess.setPosition(175, 140)
})
let Princess: Sprite = null
let Monster1: Sprite = null
Monster1 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster2 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster3 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster4 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster5 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster7 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster8 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster9 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster10 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Monster11 = sprites.create(img`
    . f f f f f f f f . 
    f f 1 2 1 1 2 1 f f 
    f f 2 2 2 2 2 2 f f 
    f 1 2 1 2 2 1 2 1 f 
    f 2 2 1 2 2 1 2 2 f 
    f 2 1 1 2 2 1 1 2 f 
    f 2 f f f f f f 2 f 
    f f d f d d f d f f 
    f f d d d d d d f f 
    . f f f f f f f f . 
    `, SpriteKind.Enemy)
let Coin = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.Food)
Princess = sprites.create(assets.image`Hero`, SpriteKind.Player)
controller.moveSprite(Princess)
tiles.setTilemap(tilemap`level1`)
Monster1.setPosition(154, 121)
Monster1.setVelocity(20, 0)
Monster2.setPosition(167, 121)
Monster2.setVelocity(20, 0)
Monster3.setPosition(180, 121)
Monster3.setVelocity(20, 0)
Monster4.setPosition(193, 121)
Monster4.setVelocity(20, 0)
Monster5.setPosition(199, 133)
Monster5.setVelocity(0, 20)
Monster7.setPosition(186, 167)
Monster7.setVelocity(-20, 0)
Monster8.setPosition(173, 167)
Monster8.setVelocity(-20, 0)
Monster9.setPosition(160, 167)
Monster9.setVelocity(-20, 0)
Monster10.setPosition(153, 153)
Monster10.setVelocity(0, -20)
Monster11.setPosition(153, 137)
Monster11.setVelocity(0, -20)
Princess.setPosition(175, 140)
Coin.setPosition(153, 106)
scene.cameraFollowSprite(Princess)
