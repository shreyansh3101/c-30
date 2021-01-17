class box
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.visibilty=255;
 		World.add(world, this.body);

	}
	display()
	{	
	push()
		var groundPos=this.body.position;
		translate(groundPos.x, groundPos.y);
			if (this.body.speed<6){
				rectMode(CENTER)
			
				fill("red")
				rect(0,0,this.w, this.h);

			}
			else{
				
				World.remove(world,this.body)
				push()
				this.visibilty=this.visibilty-5
				tint(255,this.visibilty)
				fill("red")
				rect(0,0,this.w, this.h);

			  pop()				
			}
					

		pop()
			
			
			
			
	}

}