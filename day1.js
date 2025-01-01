 
// Genuary day 1 

osc(20).modulatePixelate(osc(5)).out(o0)

osc(100).modulate(o0).rotate(Math.PI/2).out(o1)

osc(2).diff(o1).blend(o0).out(o2)


osc(50).diff(o2).blend(o1).out(o3)

render()
