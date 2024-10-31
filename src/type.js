'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
}) // 웹퍼블리셔ㅣ
.move(-7)
.type('맞춤형 ') //맞춤형 ㅣ웹퍼블리셔
.pause(1000)
.move(null, {to: 'END'}) //맞춤형 웹펴블리셔ㅣ
.delete()
.go();