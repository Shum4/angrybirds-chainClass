class Chain{
    constructor(bodyA,bodyB){
    
        //changed the properties for the chain
        //JSON format
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
            
        }
        //created chain out of constraint class
        this.chain=Constraint.create(options);
        //added the chain to the main World
        World.add(world,this.chain);   
    
    }

 display(){
    //namespaced body A and B positions
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;

    //to show the link between the contrained bodies A and B
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

 }    
}



