// Day 2
noise(4).modulate(o0, 0.9)
	//.color(0.336, 0.729, 1.437)
	.layer(osc(500)//.color(0.336, 0.729, 1.437)
		.rotate(Math.PI / 2)
		.luma())
	.layer(osc(100,0.1,0.8).modulate(o0, 0.01)
		.rotate(2)
		.luma())
	.layer(solid(1,1,1)
    .mask(
      noise(2,0.05)
      .invert().colorama(2).posterize(8,4).luma(0.25).thresh(0.5)
      .modulateRotate(osc(5,0.15))
    )
          .color(1, 1, 1, () => Math.sin(time*1.5)))
	.out(o0);
