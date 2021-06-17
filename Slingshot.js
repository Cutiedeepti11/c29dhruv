class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       image(this.image1,200,80,30,150)
       image(this.image2,180,78,30,90)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            line(pointA.x-30, pointA.y, pointB.x, pointB.y);
            line(pointA.x-30,pointA.y,pointB.x+27,pointB.y);
            image(this.image3,pointA.x-32,pointA.y-15,15,30)
        }
    }
    
}