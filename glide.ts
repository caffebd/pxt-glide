
// Add your code here
namespace sprites {
    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=glide block="glide $sprite=variables_get speed $speed to x $x y $y"
    //% group="Movement"
    //% weight=10
    //% blockGap=8
    export function setPatrolPathX(sprite: Sprite, speed: number, x: number, y: number) {
    let moving = true
    while(moving){
        pause(10)
    
        let tx = x - sprite.x
        let ty = y - sprite.y
        let dist = Math.sqrt(tx * tx + ty * ty)
        let rad = Math.atan2(ty, tx)
        let angle = rad / Math.PI * 180


        let velX = (tx / dist) * speed/10;
        let velY = (ty / dist) * speed/10;

        if (dist > 1) {
            sprite.x += velX;
            sprite.y += velY;
        }else{
            moving = false
        }
    

    }
    }

}