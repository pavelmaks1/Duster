(function (lib, img, cjs, ss) {
    var p; // shortcut to reference prototypes
// library properties:
    lib.properties = {
        width: 1920,
        height: 1080,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00
    };
    lib.ssMetadata = [];
// symbols:
    (lib.pesok = function() {
        this.initialize(img.pesok);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1920,830);
    (lib.pesok_top = function() {
        this.initialize(img.pesok_top);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1920,246);
    (lib.protektor_sled_v2 = function() {
        this.initialize(img.protektor_sled_v2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1919,535);
    (lib.sand1 = function() {
        this.initialize(img.sand1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,207,192);
    (lib.sand2 = function() {
        this.initialize(img.sand2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,235,207);
    (lib.sand3 = function() {
        this.initialize(img.sand3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,234,217);
    (lib.sand4 = function() {
        this.initialize(img.sand4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,186,232);
    (lib.smoke = function() {
        this.initialize(img.smoke);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1205,612);
    (lib.smoke3 = function() {
        this.initialize(img.smoke3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,888,754);
    (lib.Tween4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.protektor_sled_v2();
        this.instance.parent = this;
        this.instance.setTransform(-960,-267.5,1.001,1);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-960,-267.5,1920,535);
    (lib.Tween3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.protektor_sled_v2();
        this.instance.parent = this;
        this.instance.setTransform(-960,-267.5,1.001,1);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-960,-267.5,1920,535);
    (lib.Tween2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 2
        this.instance = new lib.pesok();
        this.instance.parent = this;
        this.instance.setTransform(-960,1366,1,1,0,180,0);
        this.instance_1 = new lib.pesok();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-960,-294);
        this.instance_2 = new lib.pesok_top();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-960,-540);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1906);
    (lib.Tween1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 3
        this.instance = new lib.pesok();
        this.instance.parent = this;
        this.instance.setTransform(-960,-294);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        // Layer 2
        this.instance_1 = new lib.pesok_top();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-960,-540);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
        // Layer 5
        this.instance_2 = new lib.pesok();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-960,1354,1,1,0,180,0);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1894);
    (lib.Symbol9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABLBhIAAiTIg6BYIgHAAIgIgBIgCgBIgDgCIgEgGIg1hOIAACTIgdAAIAAilIAAgEIgDgCIgMgFIADgRIAjAAIAIACIAHAIIA6BcIBChmIAgAAIAADBg");
        this.shape.setTransform(120.1,3.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("Ag+BNQgMgLgGgUQgHgUAAgaQABgZAFgUQAFgTAMgNQAKgMASgGQASgGAVAAQAtAAAUAXQAJANAGASQAEATABAaIAAAEIAAAHIiPAAQABAkASAQQAIAIAOAEQAOADASAAQAfAAAfgKIAAAaQgPAFgPACIgiACQg1AAgZgYgAA5gMQgBgigMgQQgGgIgLgEQgKgEgOAAQgNAAgMAEQgLAEgHAIQgPAQAAAiIBwAAIAAAAg");
        this.shape_1.setTransform(97.7,3.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AAzBhIAAhMIgzAAIguBMIgjAAIAzhQQgXgDgLgOQgMgMABgYQgBgQAFgLQAEgMAIgHQAQgOAlAAIBXAAIAADBgAgjhAQgKAIAAAUQAAATAKAIQAJAIAXAAIA2AAIAAhHIg2AAQgWAAgKAIg");
        this.shape_2.setTransform(76.2,3.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AhdBiIgEAAIAAgaIADAAIADAAQAMAAAIgGQAJgGAEgMQALgYAAg1IAAgpIgBgDIgCgDIgMgFIADgQICdAAIAADAIghAAIAAinIhRAAIAAAtQAAAggFAYQgDAZgJAPQgJAPgOAHQgOAHgTAAg");
        this.shape_3.setTransform(53.8,3.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AhIBhIAAilIAAgEIgDgCIgMgFIADgRIBqAAQAQAAALAEQAMADAGAGQAPANAAAbQAAAggaAJQAQACAIAMQAIAMAAATQAAAdgPAMQgOANgiAAgAgqBKIA9AAQAUAAAJgIQAJgHAAgSQAAgRgJgIQgJgHgUAAIg9AAgAgqgLIA6AAQATAAAIgHQAIgIAAgQQAAgRgIgHQgIgHgTAAIg6AAg");
        this.shape_4.setTransform(32.4,3.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgwBiQgOgEgJgGQgJgIgFgKQgEgLAAgPQAAgeASgNQAKgFAPgDQAPgDAUgBQAeABAZAHIAAgaQAAgZgNgLQgHgFgLgDQgLgCgOgBQgeAAgeAKIAAgaIAfgGQAQgCARgBQArAAAUARQAUASAAAoIAABgIAAADIADACIAMAFIgDARIghAAIgDgBIgBgDIgCgRQgIANgRAGQgQAGgWAAQgTAAgOgDgAguARQgMAIAAATQAAAJADAGQADAHAGAEQAMAIAZAAQAbAAANgKQANgKAAgWIAAgSQgLgFgNgCIgagBQgcAAgMAHg");
        this.shape_5.setTransform(11.8,3.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AgPBhIAAinIhCAAIAAgaICjAAIAAAaIhCAAIAACng");
        this.shape_6.setTransform(-8.1,3.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("Ag1BNQgXgXAAg2QAAg1AXgYQAXgYAwAAQAWAAAOADIAXAFIgFAZIgVgFQgMgCgRAAQgSAAgKAFQgOAEgHAIQgIAKgEAPQgEAOAAATQAAAUAEAPQAEAOAIAJQAQASAhAAQATAAAigIIAAAaQgjAHgWAAQgwAAgXgYg");
        this.shape_7.setTransform(-26.3,3.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("ABTB9IAAg5IilAAIAAA5IgeAAIAAhSIATAAQAJgFAFgHQAGgJAEgMQAEgKACgRIABgoIAAgoIAAgEIgDgCIgMgFIADgRICaAAIAACoIAhAAIAABSgAggg2IgBAkIgDAaQgDALgFAJQgEAJgFAGIBnAAIAAiOIhSAAg");
        this.shape_8.setTransform(-48.1,6.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("Ag+BNQgMgLgHgUQgFgUAAgaQgBgZAGgUQAFgTALgNQALgMASgGQARgGAXAAQAsAAAUAXQAJANAGASQAFATgBAaIAAAEIAAAHIiOAAQABAkARAQQAKAIAOAEQANADASAAQAfAAAfgKIAAAaQgPAFgQACIghACQg1AAgZgYgAA5gMQgBgigMgQQgGgIgKgEQgKgEgOAAQgOAAgLAEQgMAEgHAIQgOAQgBAiIBwAAIAAAAg");
        this.shape_9.setTransform(-70.7,3.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AhSCNIAAj5IAAgDIgDgDIgLgEIACgRIApAAQADAAABAEIAAAQQAIgMAQgHQAPgFAXgBQAWABAQAFQARAHAJALQAVAYgBA2QABA1gVAXQgJAMgRAGQgQAHgWgBQgWABgPgHQgPgFgKgKIAABkgAgkhlQgHAGgDALQgDAKAAAPIAABNQAKAIANAGQAOAFARAAQAQAAALgEQAMgFAHgJQAGgJAEgMQADgPABgVQAAgogOgTQgHgIgMgEQgLgFgQAAQgcAAgNANg");
        this.shape_10.setTransform(-92.6,7.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("ABYCGIAAjxIigAAIAADxIggAAIAAjyQgBgEgEgBIgLgFIACgPIDwAAIAAELg");
        this.shape_11.setTransform(-119.4,-0.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-135.5,-25.3,271,50.7);
    (lib.Symbol8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("Ah6D5IAAmhIgCgJIgGgEIgegOIAIgoIBlAAQAJgBAAAKIAAAxQA2hGBmAAIAaABIAVACIgOBHIgUgFIgZgCQg1AAgiAQQgfAPgaAWIAAF4g");
        this.shape.setTransform(317.6,7.9);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("Ah7D2QgjgJgXgRQgVgRgMgcQgLgaAAgmQAAhJAvgjQAXgOAlgJQAmgJAzABQBOgBA+AWIAAhEQAAg+gigbQgRgNgcgHQgbgGglAAQhLgBhLAYIAAhAIBNgRQAngFArAAQBvAAAyArQAyAsAABhIAADzIACAJIAGAGIAeAMIgIAqIhTAAIgGgBQgCgDgBgEIgEgrQgWAggpAPQgpAPg6AAQgwAAgjgIgAh0AsQgeAUAAAuQAAAXAIAQQAHARAOAKQAdAVA/AAQBGgBAhgZQAhgZAAg4IAAgsQgcgLghgFIhDgFQhFAAgeATg");
        this.shape_1.setTransform(271.9,8.5);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AB6FgIijjdIg1A1IAACoIhQAAIAAp7IgBgJIgHgEIgegOIAIgoIBlAAQAJAAAAAKIAAGvIDSjfIBdAAIjKDWIDOEOg");
        this.shape_2.setTransform(221.5,-2.4);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("Ah7D2QgjgJgXgRQgVgRgMgcQgLgaAAgmQAAhJAvgjQAXgOAlgJQAlgJA0ABQBOgBA+AWIAAhEQAAg+gigbQgRgNgcgHQgbgGglAAQhLgBhLAYIAAhAIBNgRQAngFArAAQBvAAAyArQAyAsAABhIAADzIACAJIAGAGIAeAMIgIAqIhTAAIgGgBQgDgDAAgEIgEgrQgWAggpAPQgpAPg6AAQgwAAgjgIgAh0AsQgeAUAAAuQAAAXAHAQQAIARAOAKQAdAVA/AAQBGgBAhgZQAhgZAAg4IAAgsQgcgLghgFIhDgFQhFAAgeATg");
        this.shape_3.setTransform(171.2,8.5);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AkJFQIAApgQABgIgKgEIgegOIAGglIEAAAIBTAFQAoAFAhAJQAiAKAbAPQAaAPAWAUQArApATBAQAVBAAABXQAABYgVBAQgTBAgrAoQgWAVgaAPQgbAPgiAKQhBAShbABgAi2EOICFAAQBHAAAzgPQA0gPAgghQAigiAPgzQAPgzAAhHQAAhHgPgyQgPg0giggQgggig0gPQgzgOhHAAIiFAAg");
        this.shape_4.setTransform(108.6,-0.8);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AC6FQIirkUIiqAAIAAEUIhQAAIAApgQgBgIgJgEIgfgOIAHglIEwAAQB5AAA1AvQAbAXAOAmQAMAmAAA1QAABZgnAuQgTAUghAOQgfAOgrAEIC0EdgAibgCIC1AAQAqAAAdgHQAegIASgPQAkgeAAhKQAAhIgkgfQgSgQgegIQgdgHgqgBIi1AAg");
        this.shape_5.setTransform(19,-0.8);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AjQFQIAApgQAAgIgKgEIgegOIAHglIHiAAIAABDIluAAIAADoIEmAAIAAA8IkmAAIAAD2IF2AAIAABCg");
        this.shape_6.setTransform(-42.7,-0.8);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgoFQIAApcIjqAAIAAhDIIlAAIAABDIjqAAIAAJcg");
        this.shape_7.setTransform(-101.9,-0.8);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("Ah8FTQg5gHg2gRIAAhEQA4ASA2AJQA2AIA5AAQBaAAAqgcQAVgOAKgYQALgYgBgiQAAgWgHgSQgHgSgPgNQgegYgsgPIhegaQg1gMgsgRQgtgUgdgkQgdgjAAg9QAAgtAOgiQAPgjAdgYQA8gyB9ABQA4AAA1AIQA2AIAsAOIgLBAQgxgQgugGQgugIgwAAQgsABghAGQghAHgUANQgoAaAABDQAAAhAQAVQASAUAcAOQAcAOAkAJIBHATIBKAWQAjALAdAWQAdAVAQAgQARAgAAAwQAAAygPAkQgPAkgfAXQg8Auh/AAQg5ABg6gJg");
        this.shape_8.setTransform(-160.8,-0.8);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AhrFGQg2gQgjggQgRgRgNgUQgNgVgIgZQgRgzAAhIIAAleQABgIgLgEIgdgOIAHglIBqAAQAJABAAAJIAAGOQAAA3ANAoQALAoAYAYQAXAZAnALQAnAMA0ABQA1gBAmgMQAngLAYgZQAYgYALgoQAMgoAAg3IAAmYIBUAAIAAGdQgBBIgQAzQgIAZgNAVQgNAUgRARQgjAgg2AQQg2APhKAAQhKAAg1gPg");
        this.shape_9.setTransform(-228.9,-0.2);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AkJFQIAApgQABgIgLgEIgdgOIAGglIEAAAIBTAFQAoAFAhAJQAiAKAbAPQAaAPAWAUQArApATBAQAVBAAABXQAABYgVBAQgTBAgrAoQgWAVgaAPQgbAPgiAKQhBAShbABgAi2EOICFAAQBHAAAzgPQA0gPAgghQAigiAPgzQAPgzAAhHQAAhHgPgyQgPg0giggQgggig0gPQgzgOhHAAIiFAAg");
        this.shape_10.setTransform(-299.1,-0.8);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-336.4,-60.3,672.8,120.7);
    (lib.Symbol7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAfgQIgXAYIgIAJAgegRIAUAYIAIAL");
        this.shape.setTransform(0,7.3);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgFBlQgEgDAAgEIAAgOIAAitQAAgEAEgDQADgDACAAQAEAAACADQADADAAAEIAACuIgIAJIAIgJIAAANQAAAEgDADQgCADgEAAQgCAAgDgDgAAABbIgJgLgAAJBRg");
        this.shape_1.setTransform(-0.1,0);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.6,-10.4,9.2,21.1);
    (lib.Symbol4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.sand2();
        this.instance.parent = this;
        this.instance.setTransform(-117.5,-103.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-117.5,-103.5,235,207);
    (lib.Symbol3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.sand3();
        this.instance.parent = this;
        this.instance.setTransform(-117,-108.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-117,-108.5,234,217);
    (lib.Symbol2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.sand1();
        this.instance.parent = this;
        this.instance.setTransform(-103.5,-96);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-103.5,-96,207,192);
    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.sand4();
        this.instance.parent = this;
        this.instance.setTransform(-93,-116);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-93,-116,186,232);
    (lib.STOP_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 2
        this.instance = new lib.sand1();
        this.instance.parent = this;
        this.instance.setTransform(555.5,-74.4,1,1,0,20,-160);
        this.instance_1 = new lib.sand1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(291.8,-43.3,1,1,0,20,-160);
        this.instance_2 = new lib.sand1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-241,-84.6,1,1,0,0,180);
        this.instance_3 = new lib.sand1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-534.2,-100.6,1,1,0,28.2,-151.8);
        this.instance_4 = new lib.sand1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-1030.3,-176.5);
        this.instance_5 = new lib.sand1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-776.4,-151.5,1,1,0,0,180);
        this.instance_6 = new lib.sand1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-756.6,-85.9,1,1,0,0,180);
        this.instance_7 = new lib.sand1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-891.3,-106.9,1,1,0,0,180);
        this.instance_8 = new lib.sand1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-891.3,-24.9);
        this.instance_9 = new lib.sand2();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-835.5,-31.1);
        this.instance_10 = new lib.sand1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-973,-1);
        this.instance_11 = new lib.sand1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-874.5,-38);
        this.instance_12 = new lib.sand1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-994.4,-73.5);
        this.instance_13 = new lib.sand2();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-1042.4,-116.9);
        this.instance_14 = new lib.sand4();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-956.1,-120.4);
        this.instance_15 = new lib.sand3();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-894.5,-91.9);
        this.instance_16 = new lib.sand4();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-846.5,-106.9);
        this.instance_17 = new lib.sand2();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-1088.9,-141.9);
        this.instance_18 = new lib.sand1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-1060.9,-66.9);
        this.instance_19 = new lib.sand1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-813.3,-179.6,1,1,0,-65.2,114.8);
        this.instance_20 = new lib.sand1();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-662.1,-150,1,1,0,0,180);
        this.instance_21 = new lib.sand1();
        this.instance_21.parent = this;
        this.instance_21.setTransform(102.5,118.1,1,1,-146.3);
        this.instance_22 = new lib.sand1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(-180.5,-40.2,1,1,-17.8);
        this.instance_23 = new lib.sand1();
        this.instance_23.parent = this;
        this.instance_23.setTransform(-325.3,-60.2,1,1,-17.8);
        this.instance_24 = new lib.sand1();
        this.instance_24.parent = this;
        this.instance_24.setTransform(-414.8,-83.4);
        this.instance_25 = new lib.sand1();
        this.instance_25.parent = this;
        this.instance_25.setTransform(-338.8,-83.4);
        this.instance_26 = new lib.sand1();
        this.instance_26.parent = this;
        this.instance_26.setTransform(-260,-83.4);
        this.instance_27 = new lib.sand1();
        this.instance_27.parent = this;
        this.instance_27.setTransform(-448,-83.4);
        this.instance_28 = new lib.sand2();
        this.instance_28.parent = this;
        this.instance_28.setTransform(-907.6,-191.5);
        this.instance_29 = new lib.sand1();
        this.instance_29.parent = this;
        this.instance_29.setTransform(-438.1,-17.5);
        this.instance_30 = new lib.sand1();
        this.instance_30.parent = this;
        this.instance_30.setTransform(230.2,-65.6,1,1,0,0,180);
        this.instance_31 = new lib.sand1();
        this.instance_31.parent = this;
        this.instance_31.setTransform(230.2,-32.6,1,1,0,0,180);
        this.instance_32 = new lib.sand1();
        this.instance_32.parent = this;
        this.instance_32.setTransform(214.6,-53.8,1,1,-23.2);
        this.instance_33 = new lib.sand1();
        this.instance_33.parent = this;
        this.instance_33.setTransform(767.3,-127.6,1,1,-19);
        this.instance_34 = new lib.sand1();
        this.instance_34.parent = this;
        this.instance_34.setTransform(731.6,-102.4);
        this.instance_35 = new lib.sand1();
        this.instance_35.parent = this;
        this.instance_35.setTransform(891.9,-156.5);
        this.instance_36 = new lib.sand1();
        this.instance_36.parent = this;
        this.instance_36.setTransform(866.3,-123.4);
        this.instance_37 = new lib.sand2();
        this.instance_37.parent = this;
        this.instance_37.setTransform(1093.7,-205,1,1,0,0,180);
        this.instance_38 = new lib.sand1();
        this.instance_38.parent = this;
        this.instance_38.setTransform(866.3,-41.4,1,1,0,0,180);
        this.instance_39 = new lib.sand2();
        this.instance_39.parent = this;
        this.instance_39.setTransform(810.5,-47.6,1,1,0,0,180);
        this.instance_40 = new lib.sand1();
        this.instance_40.parent = this;
        this.instance_40.setTransform(820.4,32.8,1,1,0,150.5,-29.5);
        this.instance_41 = new lib.sand1();
        this.instance_41.parent = this;
        this.instance_41.setTransform(849.5,-54.5,1,1,0,0,180);
        this.instance_42 = new lib.sand1();
        this.instance_42.parent = this;
        this.instance_42.setTransform(969.4,-90,1,1,0,0,180);
        this.instance_43 = new lib.sand2();
        this.instance_43.parent = this;
        this.instance_43.setTransform(1017.4,-133.4,1,1,0,0,180);
        this.instance_44 = new lib.sand4();
        this.instance_44.parent = this;
        this.instance_44.setTransform(931.1,-136.9,1,1,0,0,180);
        this.instance_45 = new lib.sand3();
        this.instance_45.parent = this;
        this.instance_45.setTransform(869.5,-108.4,1,1,0,0,180);
        this.instance_46 = new lib.sand4();
        this.instance_46.parent = this;
        this.instance_46.setTransform(821.5,-123.4,1,1,0,0,180);
        this.instance_47 = new lib.sand2();
        this.instance_47.parent = this;
        this.instance_47.setTransform(1063.9,-158.4,1,1,0,0,180);
        this.instance_48 = new lib.sand1();
        this.instance_48.parent = this;
        this.instance_48.setTransform(1035.9,-83.4,1,1,0,0,180);
        this.instance_49 = new lib.sand1();
        this.instance_49.parent = this;
        this.instance_49.setTransform(682.1,-156.5);
        this.instance_50 = new lib.sand1();
        this.instance_50.parent = this;
        this.instance_50.setTransform(-789,-160.5);
        this.instance_51 = new lib.sand1();
        this.instance_51.parent = this;
        this.instance_51.setTransform(437.6,-127.5);
        this.instance_52 = new lib.sand1();
        this.instance_52.parent = this;
        this.instance_52.setTransform(637.1,-166.5);
        this.instance_53 = new lib.sand1();
        this.instance_53.parent = this;
        this.instance_53.setTransform(527.7,-98.6,1,1,-30.9);
        this.instance_54 = new lib.sand1();
        this.instance_54.parent = this;
        this.instance_54.setTransform(-260,-17.5);
        this.instance_55 = new lib.sand1();
        this.instance_55.parent = this;
        this.instance_55.setTransform(-197,-26.5);
        this.instance_56 = new lib.sand2();
        this.instance_56.parent = this;
        this.instance_56.setTransform(-284,-50.5);
        this.instance_57 = new lib.sand4();
        this.instance_57.parent = this;
        this.instance_57.setTransform(-288,-90.5);
        this.instance_58 = new lib.sand1();
        this.instance_58.parent = this;
        this.instance_58.setTransform(-14,-8.5,1,1,0,0,180);
        this.instance_59 = new lib.sand1();
        this.instance_59.parent = this;
        this.instance_59.setTransform(123.2,-32.6,1,1,0,0,180);
        this.instance_60 = new lib.sand1();
        this.instance_60.parent = this;
        this.instance_60.setTransform(75.2,-32.6,1,1,0,0,180);
        this.instance_61 = new lib.sand2();
        this.instance_61.parent = this;
        this.instance_61.setTransform(745.6,-80.6,1,1,0,0,180);
        this.instance_62 = new lib.sand4();
        this.instance_62.parent = this;
        this.instance_62.setTransform(106.1,-116.5);
        this.instance_63 = new lib.sand4();
        this.instance_63.parent = this;
        this.instance_63.setTransform(358,-114.5,1,1,0,0,180);
        this.instance_64 = new lib.sand1();
        this.instance_64.parent = this;
        this.instance_64.setTransform(572.3,-74.5,1,1,0,0,180);
        this.instance_65 = new lib.sand2();
        this.instance_65.parent = this;
        this.instance_65.setTransform(516.5,-80.6,1,1,0,0,180);
        this.instance_66 = new lib.sand1();
        this.instance_66.parent = this;
        this.instance_66.setTransform(654,-50.5,1,1,0,0,180);
        this.instance_67 = new lib.sand1();
        this.instance_67.parent = this;
        this.instance_67.setTransform(555.5,-87.5,1,1,0,0,180);
        this.instance_68 = new lib.sand1();
        this.instance_68.parent = this;
        this.instance_68.setTransform(675.4,-123.1,1,1,0,0,180);
        this.instance_69 = new lib.sand2();
        this.instance_69.parent = this;
        this.instance_69.setTransform(685.6,-197.7,1,1,0,-18,162);
        this.instance_70 = new lib.sand4();
        this.instance_70.parent = this;
        this.instance_70.setTransform(637.1,-170,1,1,0,0,180);
        this.instance_71 = new lib.sand3();
        this.instance_71.parent = this;
        this.instance_71.setTransform(575.5,-141.5,1,1,0,0,180);
        this.instance_72 = new lib.sand4();
        this.instance_72.parent = this;
        this.instance_72.setTransform(527.5,-156.5,1,1,0,0,180);
        this.instance_73 = new lib.sand2();
        this.instance_73.parent = this;
        this.instance_73.setTransform(769.9,-191.5,1,1,0,0,180);
        this.instance_74 = new lib.sand1();
        this.instance_74.parent = this;
        this.instance_74.setTransform(741.9,-116.5,1,1,0,0,180);
        this.instance_75 = new lib.sand1();
        this.instance_75.parent = this;
        this.instance_75.setTransform(-818.1,-80.6);
        this.instance_76 = new lib.sand3();
        this.instance_76.parent = this;
        this.instance_76.setTransform(-796,-109.6);
        this.instance_77 = new lib.sand2();
        this.instance_77.parent = this;
        this.instance_77.setTransform(-752.1,-80.6);
        this.instance_78 = new lib.sand2();
        this.instance_78.parent = this;
        this.instance_78.setTransform(-560.3,-124.5);
        this.instance_79 = new lib.sand4();
        this.instance_79.parent = this;
        this.instance_79.setTransform(-364.5,-114.5);
        this.instance_80 = new lib.sand2();
        this.instance_80.parent = this;
        this.instance_80.setTransform(-288,-53.6);
        this.instance_81 = new lib.sand1();
        this.instance_81.parent = this;
        this.instance_81.setTransform(-578.8,-74.5);
        this.instance_82 = new lib.sand2();
        this.instance_82.parent = this;
        this.instance_82.setTransform(-523,-80.6);
        this.instance_83 = new lib.sand1();
        this.instance_83.parent = this;
        this.instance_83.setTransform(-660.5,-50.5);
        this.instance_84 = new lib.sand1();
        this.instance_84.parent = this;
        this.instance_84.setTransform(-562,-87.5);
        this.instance_85 = new lib.sand3();
        this.instance_85.parent = this;
        this.instance_85.setTransform(-600.5,-166.5);
        this.instance_86 = new lib.sand1();
        this.instance_86.parent = this;
        this.instance_86.setTransform(-681.9,-123.1);
        this.instance_87 = new lib.sand2();
        this.instance_87.parent = this;
        this.instance_87.setTransform(-729.9,-166.5);
        this.instance_88 = new lib.sand4();
        this.instance_88.parent = this;
        this.instance_88.setTransform(-643.6,-170);
        this.instance_89 = new lib.sand3();
        this.instance_89.parent = this;
        this.instance_89.setTransform(-582,-141.5);
        this.instance_90 = new lib.sand4();
        this.instance_90.parent = this;
        this.instance_90.setTransform(-534,-156.5);
        this.instance_91 = new lib.sand2();
        this.instance_91.parent = this;
        this.instance_91.setTransform(-776.4,-191.5);
        this.instance_92 = new lib.sand1();
        this.instance_92.parent = this;
        this.instance_92.setTransform(-748.4,-116.5);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1098.3,-236.2,2197.2,427.2);
    (lib.STOP_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 3
        this.instance = new lib.sand1();
        this.instance.parent = this;
        this.instance.setTransform(766.6,-92.9,1,1,0,19.2,-160.8);
        this.instance_1 = new lib.sand1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(478.2,-63.8,1,1,0,22.4,-157.6);
        this.instance_2 = new lib.sand1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-824.1,115.5,1,1,-79.5);
        this.instance_3 = new lib.sand1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-933,-27);
        this.instance_4 = new lib.sand1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-916,-93);
        this.instance_5 = new lib.sand1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-916,-103);
        this.instance_6 = new lib.sand4();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-895,-67);
        this.instance_7 = new lib.sand1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-1066.5,113.8,1,1,-79.5);
        this.instance_8 = new lib.sand1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-817.2,113.8,1,1,-79.5);
        this.instance_9 = new lib.sand1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-1012,-27);
        this.instance_10 = new lib.sand1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-870,-27);
        this.instance_11 = new lib.sand1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-853,-93);
        this.instance_12 = new lib.sand1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-897.3,-69.6,1,1,-19.7);
        this.instance_13 = new lib.sand1();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-1001.8,-176.8,1,1,15.5);
        this.instance_14 = new lib.sand4();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-832,-67);
        this.instance_15 = new lib.sand2();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-1020,-168);
        this.instance_16 = new lib.sand1();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-992,-93);
        this.instance_17 = new lib.sand1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-850.3,113.8,1,1,-79.5);
        this.instance_18 = new lib.sand1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-796,-27);
        this.instance_19 = new lib.sand1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-776,-93);
        this.instance_20 = new lib.sand1();
        this.instance_20.parent = this;
        this.instance_20.setTransform(783.6,57.5,1,1,0,79.5,-100.5);
        this.instance_21 = new lib.sand1();
        this.instance_21.parent = this;
        this.instance_21.setTransform(933,-41,1,1,0,0,180);
        this.instance_22 = new lib.sand1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(915,-107,1,1,0,0,180);
        this.instance_23 = new lib.sand1();
        this.instance_23.parent = this;
        this.instance_23.setTransform(915,-117,1,1,0,0,180);
        this.instance_24 = new lib.sand4();
        this.instance_24.parent = this;
        this.instance_24.setTransform(894,-81,1,1,0,0,180);
        this.instance_25 = new lib.sand1();
        this.instance_25.parent = this;
        this.instance_25.setTransform(1066,99.8,1,1,0,79.5,-100.5);
        this.instance_26 = new lib.sand1();
        this.instance_26.parent = this;
        this.instance_26.setTransform(816.6,99.8,1,1,0,79.5,-100.5);
        this.instance_27 = new lib.sand1();
        this.instance_27.parent = this;
        this.instance_27.setTransform(1059,-153,1,1,0,0,180);
        this.instance_28 = new lib.sand1();
        this.instance_28.parent = this;
        this.instance_28.setTransform(1012,-41,1,1,0,0,180);
        this.instance_29 = new lib.sand1();
        this.instance_29.parent = this;
        this.instance_29.setTransform(869,-41,1,1,0,0,180);
        this.instance_30 = new lib.sand4();
        this.instance_30.parent = this;
        this.instance_30.setTransform(696.2,-214.3,1,1,0,-60.5,119.5);
        this.instance_31 = new lib.sand1();
        this.instance_31.parent = this;
        this.instance_31.setTransform(852,-107,1,1,0,0,180);
        this.instance_32 = new lib.sand1();
        this.instance_32.parent = this;
        this.instance_32.setTransform(852,-117,1,1,0,0,180);
        this.instance_33 = new lib.sand1();
        this.instance_33.parent = this;
        this.instance_33.setTransform(1032,-171,1,1,0,0,180);
        this.instance_34 = new lib.sand4();
        this.instance_34.parent = this;
        this.instance_34.setTransform(831,-81,1,1,0,0,180);
        this.instance_35 = new lib.sand4();
        this.instance_35.parent = this;
        this.instance_35.setTransform(716,-135,1,1,0,0,180);
        this.instance_36 = new lib.sand2();
        this.instance_36.parent = this;
        this.instance_36.setTransform(1019,-182,1,1,0,0,180);
        this.instance_37 = new lib.sand1();
        this.instance_37.parent = this;
        this.instance_37.setTransform(991,-107,1,1,0,0,180);
        this.instance_38 = new lib.sand1();
        this.instance_38.parent = this;
        this.instance_38.setTransform(607.4,101.5,1,1,0,79.5,-100.5);
        this.instance_39 = new lib.sand1();
        this.instance_39.parent = this;
        this.instance_39.setTransform(716,-41,1,1,0,0,180);
        this.instance_40 = new lib.sand1();
        this.instance_40.parent = this;
        this.instance_40.setTransform(699,-107,1,1,0,0,180);
        this.instance_41 = new lib.sand1();
        this.instance_41.parent = this;
        this.instance_41.setTransform(699,-117,1,1,0,0,180);
        this.instance_42 = new lib.sand4();
        this.instance_42.parent = this;
        this.instance_42.setTransform(678,-81,1,1,0,0,180);
        this.instance_43 = new lib.sand4();
        this.instance_43.parent = this;
        this.instance_43.setTransform(615,-138,1,1,0,0,180);
        this.instance_44 = new lib.sand1();
        this.instance_44.parent = this;
        this.instance_44.setTransform(849.8,99.8,1,1,0,79.5,-100.5);
        this.instance_45 = new lib.sand1();
        this.instance_45.parent = this;
        this.instance_45.setTransform(-20.4,110.4,1,1,0,142.8,-37.2);
        this.instance_46 = new lib.sand1();
        this.instance_46.parent = this;
        this.instance_46.setTransform(388.4,-67.8,1,1,0,18.7,-161.3);
        this.instance_47 = new lib.sand1();
        this.instance_47.parent = this;
        this.instance_47.setTransform(289.2,-67,1,1,0,15,-165);
        this.instance_48 = new lib.sand1();
        this.instance_48.parent = this;
        this.instance_48.setTransform(156.8,-95.3,1,1,0,-10.7,169.3);
        this.instance_49 = new lib.sand1();
        this.instance_49.parent = this;
        this.instance_49.setTransform(-29.7,141.3,1,1,0,144.8,-35.2);
        this.instance_50 = new lib.sand1();
        this.instance_50.parent = this;
        this.instance_50.setTransform(175.1,135,1,1,0,144.8,-35.2);
        this.instance_51 = new lib.sand1();
        this.instance_51.parent = this;
        this.instance_51.setTransform(289.7,111.5,1,1,0,144.8,-35.2);
        this.instance_52 = new lib.sand1();
        this.instance_52.parent = this;
        this.instance_52.setTransform(600.4,99.8,1,1,0,79.5,-100.5);
        this.instance_53 = new lib.sand1();
        this.instance_53.parent = this;
        this.instance_53.setTransform(521,-69,1,1,0,0,180);
        this.instance_54 = new lib.sand1();
        this.instance_54.parent = this;
        this.instance_54.setTransform(796,-41,1,1,0,0,180);
        this.instance_55 = new lib.sand1();
        this.instance_55.parent = this;
        this.instance_55.setTransform(653,-41,1,1,0,0,180);
        this.instance_56 = new lib.sand1();
        this.instance_56.parent = this;
        this.instance_56.setTransform(636,-107,1,1,0,0,180);
        this.instance_57 = new lib.sand1();
        this.instance_57.parent = this;
        this.instance_57.setTransform(636,-117,1,1,0,0,180);
        this.instance_58 = new lib.sand4();
        this.instance_58.parent = this;
        this.instance_58.setTransform(393,-109,1,1,0,0,180);
        this.instance_59 = new lib.sand4();
        this.instance_59.parent = this;
        this.instance_59.setTransform(264,-145,1,1,0,0,180);
        this.instance_60 = new lib.sand4();
        this.instance_60.parent = this;
        this.instance_60.setTransform(302,-109,1,1,0,0,180);
        this.instance_61 = new lib.sand4();
        this.instance_61.parent = this;
        this.instance_61.setTransform(346,-124,1,1,0,0,180);
        this.instance_62 = new lib.sand4();
        this.instance_62.parent = this;
        this.instance_62.setTransform(264,-99,1,1,0,0,180);
        this.instance_63 = new lib.sand4();
        this.instance_63.parent = this;
        this.instance_63.setTransform(235,-82,1,1,0,0,180);
        this.instance_64 = new lib.sand4();
        this.instance_64.parent = this;
        this.instance_64.setTransform(157,-82,1,1,0,0,180);
        this.instance_65 = new lib.sand4();
        this.instance_65.parent = this;
        this.instance_65.setTransform(138,-63,1,1,0,0,180);
        this.instance_66 = new lib.sand4();
        this.instance_66.parent = this;
        this.instance_66.setTransform(63,-32,1,1,0,0,180);
        this.instance_67 = new lib.sand4();
        this.instance_67.parent = this;
        this.instance_67.setTransform(446,-124,1,1,0,0,180);
        this.instance_68 = new lib.sand4();
        this.instance_68.parent = this;
        this.instance_68.setTransform(615,-81,1,1,0,0,180);
        this.instance_69 = new lib.sand4();
        this.instance_69.parent = this;
        this.instance_69.setTransform(551,-138,1,1,0,0,180);
        this.instance_70 = new lib.sand4();
        this.instance_70.parent = this;
        this.instance_70.setTransform(391.6,-185.4,1,1,0,-60.5,119.5);
        this.instance_71 = new lib.sand4();
        this.instance_71.parent = this;
        this.instance_71.setTransform(500,-135,1,1,0,0,180);
        this.instance_72 = new lib.sand4();
        this.instance_72.parent = this;
        this.instance_72.setTransform(441.6,-185.4,1,1,0,-60.5,119.5);
        this.instance_73 = new lib.sand1();
        this.instance_73.parent = this;
        this.instance_73.setTransform(775,-107,1,1,0,0,180);
        this.instance_74 = new lib.sand4();
        this.instance_74.parent = this;
        this.instance_74.setTransform(762.3,-219.4,1,1,0,-64.2,115.8);
        this.instance_75 = new lib.sand1();
        this.instance_75.parent = this;
        this.instance_75.setTransform(-863,142.4,1,1,-79.5);
        this.instance_76 = new lib.sand1();
        this.instance_76.parent = this;
        this.instance_76.setTransform(-863,98.3,1,1,-79.5);
        this.instance_77 = new lib.sand1();
        this.instance_77.parent = this;
        this.instance_77.setTransform(-66,108.9,1,1,-142.8);
        this.instance_78 = new lib.sand1();
        this.instance_78.parent = this;
        this.instance_78.setTransform(-555.4,-66.5,1,1,-18.7);
        this.instance_79 = new lib.sand1();
        this.instance_79.parent = this;
        this.instance_79.setTransform(-389.7,-60.2,1,1,-18.7);
        this.instance_80 = new lib.sand1();
        this.instance_80.parent = this;
        this.instance_80.setTransform(-243.3,-96.8,1,1,10.7);
        this.instance_81 = new lib.sand1();
        this.instance_81.parent = this;
        this.instance_81.setTransform(-56.7,139.8,1,1,-144.8);
        this.instance_82 = new lib.sand1();
        this.instance_82.parent = this;
        this.instance_82.setTransform(-261.6,133.5,1,1,-144.8);
        this.instance_83 = new lib.sand1();
        this.instance_83.parent = this;
        this.instance_83.setTransform(-376.2,110,1,1,-144.8);
        this.instance_84 = new lib.sand1();
        this.instance_84.parent = this;
        this.instance_84.setTransform(-686.9,98.3,1,1,-79.5);
        this.instance_85 = new lib.sand1();
        this.instance_85.parent = this;
        this.instance_85.setTransform(-607,-71);
        this.instance_86 = new lib.sand1();
        this.instance_86.parent = this;
        this.instance_86.setTransform(-809,-43);
        this.instance_87 = new lib.sand1();
        this.instance_87.parent = this;
        this.instance_87.setTransform(-740,-43);
        this.instance_88 = new lib.sand1();
        this.instance_88.parent = this;
        this.instance_88.setTransform(-722,-109);
        this.instance_89 = new lib.sand1();
        this.instance_89.parent = this;
        this.instance_89.setTransform(-752.3,-91.9,1,1,-15.2);
        this.instance_90 = new lib.sand4();
        this.instance_90.parent = this;
        this.instance_90.setTransform(-480,-111);
        this.instance_91 = new lib.sand4();
        this.instance_91.parent = this;
        this.instance_91.setTransform(-388,-111);
        this.instance_92 = new lib.sand4();
        this.instance_92.parent = this;
        this.instance_92.setTransform(-432,-126);
        this.instance_93 = new lib.sand4();
        this.instance_93.parent = this;
        this.instance_93.setTransform(-350,-100);
        this.instance_94 = new lib.sand4();
        this.instance_94.parent = this;
        this.instance_94.setTransform(-322,-83);
        this.instance_95 = new lib.sand4();
        this.instance_95.parent = this;
        this.instance_95.setTransform(-246,-83);
        this.instance_96 = new lib.sand4();
        this.instance_96.parent = this;
        this.instance_96.setTransform(-227,-65);
        this.instance_97 = new lib.sand4();
        this.instance_97.parent = this;
        this.instance_97.setTransform(-164,-65);
        this.instance_98 = new lib.sand4();
        this.instance_98.parent = this;
        this.instance_98.setTransform(-533,-126);
        this.instance_99 = new lib.sand4();
        this.instance_99.parent = this;
        this.instance_99.setTransform(-701,-83);
        this.instance_100 = new lib.sand4();
        this.instance_100.parent = this;
        this.instance_100.setTransform(-638,-139);
        this.instance_101 = new lib.sand4();
        this.instance_101.parent = this;
        this.instance_101.setTransform(-586,-136);
        this.instance_102 = new lib.sand1();
        this.instance_102.parent = this;
        this.instance_102.setTransform(-789,-109);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1066.5,-219.4,2132.5,419.4);
    (lib.smoke3_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.smoke3();
        this.instance.parent = this;
        this.instance.setTransform(-444,-377);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-444,-377,888,754);
    (lib.smoke1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 1
        this.instance = new lib.smoke();
        this.instance.parent = this;
        this.instance.setTransform(-602.5,-306);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-602.5,-306,1205,612);
    (lib.dust = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    (lib.smoke_big_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(1);
        }
        this.frame_48 = function() {
            this.stop();
        }
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(1));
        // Layer 2
        this.instance = new lib.smoke1();
        this.instance.parent = this;
        this.instance.setTransform(-409.5,-95.9,0.872,0.872,0,23,-157);
        this.instance.alpha = 0;
        this.instance._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,alpha:1},13).to({regX:0.1,scaleX:1.06,scaleY:1.06,x:-437.2,y:-101.5,alpha:0},15).wait(17));
        // smoke1
        this.instance_1 = new lib.smoke1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(513,-102.5,0.903,0.903,-23);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,x:573,y:-98.3,alpha:1},15).to({scaleX:1.08,scaleY:1.08,x:597.7,y:-96.6,alpha:0},16).wait(15));
        // Layer 6
        this.instance_2 = new lib.smoke1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-106,-49.4,0.923,0.923,-14.6,0,0,-0.1,0);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regY:0.1,scaleX:1.05,scaleY:1.05,x:-130.8,y:-37.8,alpha:1},15).to({regY:0,scaleX:1.1,scaleY:1.1,x:-141,y:-33.2,alpha:0},16).wait(17));
        // Layer 2
        this.instance_3 = new lib.dust();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-89.2,-22.6,0.424,0.424,0,0,180,0.1,0);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({regX:0.2,regY:0.1,scaleX:0.6,scaleY:0.6,alpha:0.27},16).to({regX:0.3,scaleX:0.7,scaleY:0.7,alpha:0},15).wait(14));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    (lib.smoke_big = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(1);
        }
        this.frame_46 = function() {
            this.stop();
        }
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46).call(this.frame_46).wait(1));
        // smoke3
        this.instance = new lib.smoke3_1();
        this.instance.parent = this;
        this.instance.setTransform(487,0);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.84,scaleY:0.84,x:410,y:11,alpha:0},0).to({scaleX:1,scaleY:1,x:487,y:0,alpha:0.699},17).to({scaleX:1.07,scaleY:1.07,x:517,y:12.6,alpha:0},14).to({_off:true},13).wait(2));
        // Layer 5
        this.instance_1 = new lib.smoke1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-291.2,-10.8,0.842,0.842,-8.9,0,0,-0.1,0.1);
        this.instance_1.alpha = 0.66;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2).to({_off:false,regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:-243.1,y:11.1,alpha:0},0).to({regX:-0.1,regY:0.1,scaleX:0.84,scaleY:0.84,x:-291.2,y:-10.8,alpha:0.41},16).to({regY:-0.1,scaleX:0.85,scaleY:0.85,rotation:-8.8,x:-294.8,y:-13.1,alpha:0.34},3).to({scaleX:0.89,scaleY:0.89,rotation:-8.9,x:-311.2,y:-23,alpha:0},12).to({_off:true},11).wait(2));
        // smoke1
        this.instance_2 = new lib.smoke1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-7.6,12);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.73,scaleY:0.73,rotation:-7.8,x:-7.7,y:12.1,alpha:0.18},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-4,x:-7.6,y:12,alpha:1},15).to({regX:-0.1,regY:0.1,scaleX:1.08,scaleY:1.08,rotation:-7.5,x:-7.7,y:12.1,alpha:0},16).to({_off:true},13).wait(2));
        // Layer 6
        this.instance_3 = new lib.smoke1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(141.8,42.1,0.842,0.842,-14.6,0,0,-0.1,0.1);
        this.instance_3.alpha = 0.422;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(5).to({_off:false,scaleX:0.8,scaleY:0.8,x:138.8,alpha:0},0).to({scaleX:0.84,scaleY:0.84,x:141.8,alpha:0.422},16).to({regX:-0.2,scaleX:0.86,scaleY:0.86,x:153.8,y:39.1,alpha:0},14).to({_off:true},9).wait(2));
        // smoke3
        this.instance_4 = new lib.smoke3_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-533.7,0,1,1,0,0,180);
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1).to({_off:false,scaleX:0.84,scaleY:0.84,x:-456.7,y:11,alpha:0},0).to({scaleX:1,scaleY:1,x:-533.7,y:0,alpha:0.781},17).to({scaleX:1.07,scaleY:1.07,x:-618.9,y:9.9,alpha:0},15).to({_off:true},11).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-977.7,-377,1908.7,796.1);
    (lib.s4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(1);
        }
        this.frame_23 = function() {
            this.stop();
        }
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));
        // Layer 2
        this.instance = new lib.Symbol1();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));
        // Layer 1
        this.instance_1 = new lib.Symbol1();
        this.instance_1.parent = this;
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,rotation:15,x:-62,y:25.1,alpha:0},22,cjs.Ease.get(1)).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-93,-116,186,232);
    (lib.s3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(1);
        }
        this.frame_17 = function() {
            this.stop();
        }
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(4));
        // Layer 2
        this.instance = new lib.Symbol3();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(20));
        // Layer 1
        this.instance_1 = new lib.Symbol3();
        this.instance_1.parent = this;
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.83,scaleY:0.83,x:-109,y:74.5,alpha:0},16,cjs.Ease.get(1)).wait(4));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-117,-108.5,234,217);
    (lib.s2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(1);
        }
        this.frame_23 = function() {
            this.stop();
        }
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));
        // Layer 2
        this.instance = new lib.Symbol4();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));
        // Layer 1
        this.instance_1 = new lib.Symbol4();
        this.instance_1.parent = this;
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,x:-70.9,y:71,alpha:0},22,cjs.Ease.get(1)).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-117.5,-103.5,235,207);
    (lib.s1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(1);
        }
        this.frame_24 = function() {
            this.stop();
        }
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));
        // Layer 2
        this.instance = new lib.Symbol2();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(24));
        // Layer 1
        this.instance_1 = new lib.Symbol2();
        this.instance_1.parent = this;
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:0.1,scaleX:1.26,scaleY:1.26,rotation:-8.2,x:27,y:16.1,alpha:0},23,cjs.Ease.get(1)).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-103.5,-96,207,192);
    (lib.mouse = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 2
        this.instance = new lib.Symbol7();
        this.instance.parent = this;
        this.instance.setTransform(0.1,17,1,1,0,0,0,0,0.1);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:21.6},16,cjs.Ease.get(0.36)).to({y:17},17,cjs.Ease.get(-0.5)).wait(1));
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhKDaQgQgJgOgOQglglAAg1IAAjPQAAg1AlgmQAnglA0AAIAbAAQA0AAAmAlQAmAmAAA1IAADPQAAA1glAlIgBABQgMAMgOAIQgOAIgQAFIgHgdQAUgGARgPIAFgFQAdgdAAgoIAAjPQAAgpgdgdQgcgcgpAAIgbAAQgoAAgdAcIAAABQgdAdAAAoIAADPQAAApAdAcIAIAIQASAPAXAFIgGAdQgSgEgRgJgAgJhJQgFgEAAgGIAAgxQAAgGAFgFQAFgEAEAAQAFAAAFAEQAFAFAAAGIAAAxQAAAGgFAEQgFAFgFAAQgEAAgFgFg");
        this.shape.setTransform(0,-5.7);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(34));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.2,-28.9,28.5,56.5);
    (lib.ANIMATION_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 2
        this.instance = new lib.s1();
        this.instance.parent = this;
        this.instance.setTransform(424.4,-48.5,1,1,0,20,-160);
        this.instance_1 = new lib.s1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(160.8,-17.4,1,1,0,20,-160);
        this.instance_2 = new lib.s1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-345.5,-17.6,1,1,0,0,180);
        this.instance_3 = new lib.s1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-671.8,-94,1,1,0,28.2,-151.8);
        this.instance_4 = new lib.s1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-927.8,-109.5);
        this.instance_5 = new lib.s1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-880.9,-84.5,1,1,0,0,180);
        this.instance_6 = new lib.s1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-861.1,-18.9,1,1,0,0,180);
        this.instance_7 = new lib.s1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-995.8,-39.9,1,1,0,0,180);
        this.instance_8 = new lib.s1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-788.8,42.1);
        this.instance_9 = new lib.s2();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-719,43.4);
        this.instance_10 = new lib.s1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-870.5,66);
        this.instance_11 = new lib.s1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-772,29);
        this.instance_12 = new lib.s1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-891.9,-6.5);
        this.instance_13 = new lib.s2();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-925.9,-42.4);
        this.instance_14 = new lib.s4();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-864.1,-33.4);
        this.instance_15 = new lib.s3();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-778.5,-12.4);
        this.instance_16 = new lib.s4();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-754.5,-19.9);
        this.instance_17 = new lib.s2();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-972.4,-67.4);
        this.instance_18 = new lib.s1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-958.4,0.1);
        this.instance_19 = new lib.s1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-770.6,-74.4,1,1,0,-65.2,114.8);
        this.instance_20 = new lib.s1();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-766.6,-83,1,1,0,0,180);
        this.instance_21 = new lib.s1();
        this.instance_21.parent = this;
        this.instance_21.setTransform(68.7,-48.2,1,1,-146.3);
        this.instance_22 = new lib.s1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(-53.7,-9.4,1,1,-17.8);
        this.instance_23 = new lib.s1();
        this.instance_23.parent = this;
        this.instance_23.setTransform(-198.5,-29.4,1,1,-17.8);
        this.instance_24 = new lib.s1();
        this.instance_24.parent = this;
        this.instance_24.setTransform(-312.3,-16.4);
        this.instance_25 = new lib.s1();
        this.instance_25.parent = this;
        this.instance_25.setTransform(-236.3,-16.4);
        this.instance_26 = new lib.s1();
        this.instance_26.parent = this;
        this.instance_26.setTransform(-157.5,-16.4);
        this.instance_27 = new lib.s1();
        this.instance_27.parent = this;
        this.instance_27.setTransform(-345.5,-16.4);
        this.instance_28 = new lib.s2();
        this.instance_28.parent = this;
        this.instance_28.setTransform(-791.1,-117);
        this.instance_29 = new lib.s1();
        this.instance_29.parent = this;
        this.instance_29.setTransform(-335.6,49.5);
        this.instance_30 = new lib.s1();
        this.instance_30.parent = this;
        this.instance_30.setTransform(125.7,1.4,1,1,0,0,180);
        this.instance_31 = new lib.s1();
        this.instance_31.parent = this;
        this.instance_31.setTransform(125.7,34.4,1,1,0,0,180);
        this.instance_32 = new lib.s1();
        this.instance_32.parent = this;
        this.instance_32.setTransform(346.6,-35.4,1,1,-23.2);
        this.instance_33 = new lib.s1();
        this.instance_33.parent = this;
        this.instance_33.setTransform(895.4,-99.5,1,1,-19);
        this.instance_34 = new lib.s1();
        this.instance_34.parent = this;
        this.instance_34.setTransform(834.1,-35.4);
        this.instance_35 = new lib.s1();
        this.instance_35.parent = this;
        this.instance_35.setTransform(994.4,-89.5);
        this.instance_36 = new lib.s1();
        this.instance_36.parent = this;
        this.instance_36.setTransform(968.8,-56.4);
        this.instance_37 = new lib.s2();
        this.instance_37.parent = this;
        this.instance_37.setTransform(975.2,-130.5,1,1,0,0,180);
        this.instance_38 = new lib.s1();
        this.instance_38.parent = this;
        this.instance_38.setTransform(761.8,25.6,1,1,0,0,180);
        this.instance_39 = new lib.s2();
        this.instance_39.parent = this;
        this.instance_39.setTransform(692,26.9,1,1,0,0,180);
        this.instance_40 = new lib.s1();
        this.instance_40.parent = this;
        this.instance_40.setTransform(862.3,-130.7,1,1,0,150.5,-29.5);
        this.instance_41 = new lib.s1();
        this.instance_41.parent = this;
        this.instance_41.setTransform(745,12.5,1,1,0,0,180);
        this.instance_42 = new lib.s1();
        this.instance_42.parent = this;
        this.instance_42.setTransform(864.9,-23,1,1,0,0,180);
        this.instance_43 = new lib.s2();
        this.instance_43.parent = this;
        this.instance_43.setTransform(898.9,-58.9,1,1,0,0,180);
        this.instance_44 = new lib.s4();
        this.instance_44.parent = this;
        this.instance_44.setTransform(837.1,-49.9,1,1,0,0,180);
        this.instance_45 = new lib.s3();
        this.instance_45.parent = this;
        this.instance_45.setTransform(751.5,-28.9,1,1,0,0,180);
        this.instance_46 = new lib.s4();
        this.instance_46.parent = this;
        this.instance_46.setTransform(727.5,-36.4,1,1,0,0,180);
        this.instance_47 = new lib.s2();
        this.instance_47.parent = this;
        this.instance_47.setTransform(945.4,-83.9,1,1,0,0,180);
        this.instance_48 = new lib.s1();
        this.instance_48.parent = this;
        this.instance_48.setTransform(931.4,-16.4,1,1,0,0,180);
        this.instance_49 = new lib.s1();
        this.instance_49.parent = this;
        this.instance_49.setTransform(784.6,-89.5);
        this.instance_50 = new lib.s1();
        this.instance_50.parent = this;
        this.instance_50.setTransform(-686.5,-93.5);
        this.instance_51 = new lib.s1();
        this.instance_51.parent = this;
        this.instance_51.setTransform(540.1,-60.5);
        this.instance_52 = new lib.s1();
        this.instance_52.parent = this;
        this.instance_52.setTransform(739.6,-99.5);
        this.instance_53 = new lib.s1();
        this.instance_53.parent = this;
        this.instance_53.setTransform(664.8,-98.5,1,1,-30.9);
        this.instance_54 = new lib.s1();
        this.instance_54.parent = this;
        this.instance_54.setTransform(-157.5,49.5);
        this.instance_55 = new lib.s1();
        this.instance_55.parent = this;
        this.instance_55.setTransform(-94.5,40.5);
        this.instance_56 = new lib.s2();
        this.instance_56.parent = this;
        this.instance_56.setTransform(-167.5,24);
        this.instance_57 = new lib.s4();
        this.instance_57.parent = this;
        this.instance_57.setTransform(-196,-3.5);
        this.instance_58 = new lib.s1();
        this.instance_58.parent = this;
        this.instance_58.setTransform(-118.5,58.5,1,1,0,0,180);
        this.instance_59 = new lib.s1();
        this.instance_59.parent = this;
        this.instance_59.setTransform(18.7,34.4,1,1,0,0,180);
        this.instance_60 = new lib.s1();
        this.instance_60.parent = this;
        this.instance_60.setTransform(-29.3,34.4,1,1,0,0,180);
        this.instance_61 = new lib.s2();
        this.instance_61.parent = this;
        this.instance_61.setTransform(627.1,-6.1,1,1,0,0,180);
        this.instance_62 = new lib.s4();
        this.instance_62.parent = this;
        this.instance_62.setTransform(198.1,-29.5);
        this.instance_63 = new lib.s4();
        this.instance_63.parent = this;
        this.instance_63.setTransform(264,-27.5,1,1,0,0,180);
        this.instance_64 = new lib.s1();
        this.instance_64.parent = this;
        this.instance_64.setTransform(467.8,-7.5,1,1,0,0,180);
        this.instance_65 = new lib.s2();
        this.instance_65.parent = this;
        this.instance_65.setTransform(398,-6.1,1,1,0,0,180);
        this.instance_66 = new lib.s1();
        this.instance_66.parent = this;
        this.instance_66.setTransform(549.5,16.5,1,1,0,0,180);
        this.instance_67 = new lib.s1();
        this.instance_67.parent = this;
        this.instance_67.setTransform(451,-20.5,1,1,0,0,180);
        this.instance_68 = new lib.s1();
        this.instance_68.parent = this;
        this.instance_68.setTransform(570.9,-56.1,1,1,0,0,180);
        this.instance_69 = new lib.s2();
        this.instance_69.parent = this;
        this.instance_69.setTransform(604.9,-92,1,1,0,-18,162);
        this.instance_70 = new lib.s4();
        this.instance_70.parent = this;
        this.instance_70.setTransform(543.1,-83,1,1,0,0,180);
        this.instance_71 = new lib.s3();
        this.instance_71.parent = this;
        this.instance_71.setTransform(457.5,-62,1,1,0,0,180);
        this.instance_72 = new lib.s4();
        this.instance_72.parent = this;
        this.instance_72.setTransform(433.5,-69.5,1,1,0,0,180);
        this.instance_73 = new lib.s2();
        this.instance_73.parent = this;
        this.instance_73.setTransform(651.4,-117,1,1,0,0,180);
        this.instance_74 = new lib.s1();
        this.instance_74.parent = this;
        this.instance_74.setTransform(637.4,-49.5,1,1,0,0,180);
        this.instance_75 = new lib.s1();
        this.instance_75.parent = this;
        this.instance_75.setTransform(-715.6,-13.6);
        this.instance_75.alpha = 0.602;
        this.instance_76 = new lib.s3();
        this.instance_76.parent = this;
        this.instance_76.setTransform(-680,-30.1);
        this.instance_76.alpha = 0.602;
        this.instance_77 = new lib.s2();
        this.instance_77.parent = this;
        this.instance_77.setTransform(-635.6,-6.1);
        this.instance_78 = new lib.s2();
        this.instance_78.parent = this;
        this.instance_78.setTransform(-443.8,-50);
        this.instance_79 = new lib.s4();
        this.instance_79.parent = this;
        this.instance_79.setTransform(-272.5,-27.5);
        this.instance_80 = new lib.s2();
        this.instance_80.parent = this;
        this.instance_80.setTransform(-171.5,20.9);
        this.instance_81 = new lib.s1();
        this.instance_81.parent = this;
        this.instance_81.setTransform(-476.3,-7.5);
        this.instance_82 = new lib.s2();
        this.instance_82.parent = this;
        this.instance_82.setTransform(-406.5,-6.1);
        this.instance_83 = new lib.s1();
        this.instance_83.parent = this;
        this.instance_83.setTransform(-558,16.5);
        this.instance_84 = new lib.s1();
        this.instance_84.parent = this;
        this.instance_84.setTransform(-459.5,-20.5);
        this.instance_85 = new lib.s3();
        this.instance_85.parent = this;
        this.instance_85.setTransform(-484.5,-87);
        this.instance_86 = new lib.s1();
        this.instance_86.parent = this;
        this.instance_86.setTransform(-579.4,-56.1);
        this.instance_87 = new lib.s2();
        this.instance_87.parent = this;
        this.instance_87.setTransform(-613.4,-92);
        this.instance_88 = new lib.s4();
        this.instance_88.parent = this;
        this.instance_88.setTransform(-551.6,-83);
        this.instance_89 = new lib.s3();
        this.instance_89.parent = this;
        this.instance_89.setTransform(-466,-62);
        this.instance_90 = new lib.s4();
        this.instance_90.parent = this;
        this.instance_90.setTransform(-442,-69.5);
        this.instance_91 = new lib.s2();
        this.instance_91.parent = this;
        this.instance_91.setTransform(-659.9,-117);
        this.instance_92 = new lib.s1();
        this.instance_92.parent = this;
        this.instance_92.setTransform(-645.9,-49.5);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
        // Layer 1
        this.instance_93 = new lib.smoke_big_2();
        this.instance_93.parent = this;
        this.instance_93.setTransform(-103.3,57.7);
        this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1099.3,-265.2,2197.2,427.2);
    (lib.ANIMATION_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // s1
        this.instance = new lib.s1();
        this.instance.parent = this;
        this.instance.setTransform(675,-76.8,1,1,0,19.2,-160.8,0,-0.1);
        this.instance_1 = new lib.s1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(383.7,-55,1,1,0,22.4,-157.6,0,-0.1);
        this.instance_2 = new lib.s1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-673.2,-9,1,1,-79.5);
        this.instance_3 = new lib.s1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-790.6,32.1);
        this.instance_4 = new lib.s1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-773.2,-34);
        this.instance_5 = new lib.s1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-773.2,-43.5);
        this.instance_6 = new lib.s4();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-762.7,12.1);
        this.instance_7 = new lib.s1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-915.6,-10.7,1,1,-79.5);
        this.instance_8 = new lib.s1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-666.2,-10.7,1,1,-79.5);
        this.instance_9 = new lib.s1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-869.7,32.1);
        this.instance_10 = new lib.s1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-727.2,32.1);
        this.instance_11 = new lib.s1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-709.9,-34);
        this.instance_12 = new lib.s1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-729.9,-54.4,1,1,-19.7);
        this.instance_13 = new lib.s1();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-890,-97,1,1,15.5);
        this.instance_14 = new lib.s4();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-699.4,12.1);
        this.instance_15 = new lib.s2();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-863.4,-101.5);
        this.instance_16 = new lib.s1();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-849.4,-34);
        this.instance_17 = new lib.s1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-699.4,-10.7,1,1,-79.5);
        this.instance_18 = new lib.s1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-653.5,32.1);
        this.instance_19 = new lib.s1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-633.2,-34);
        this.instance_20 = new lib.s1();
        this.instance_20.parent = this;
        this.instance_20.setTransform(707.9,-67,1,1,0,79.5,-100.5);
        this.instance_21 = new lib.s1();
        this.instance_21.parent = this;
        this.instance_21.setTransform(865.3,18.2,1,1,0,0,180);
        this.instance_22 = new lib.s1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(848,-48,1,1,0,0,180);
        this.instance_23 = new lib.s1();
        this.instance_23.parent = this;
        this.instance_23.setTransform(848,-57.4,1,1,0,0,180);
        this.instance_24 = new lib.s4();
        this.instance_24.parent = this;
        this.instance_24.setTransform(837.5,-1.8,1,1,0,0,180);
        this.instance_25 = new lib.s1();
        this.instance_25.parent = this;
        this.instance_25.setTransform(990.3,-24.7,1,1,0,79.5,-100.5);
        this.instance_26 = new lib.s1();
        this.instance_26.parent = this;
        this.instance_26.setTransform(741,-24.7,1,1,0,79.5,-100.5);
        this.instance_27 = new lib.s1();
        this.instance_27.parent = this;
        this.instance_27.setTransform(991.6,-94,1,1,0,0,180);
        this.instance_28 = new lib.s1();
        this.instance_28.parent = this;
        this.instance_28.setTransform(944.4,18.2,1,1,0,0,180);
        this.instance_29 = new lib.s1();
        this.instance_29.parent = this;
        this.instance_29.setTransform(802,18.2,1,1,0,0,180);
        this.instance_30 = new lib.s4();
        this.instance_30.parent = this;
        this.instance_30.setTransform(788.9,-116.5,1,1,0,-60.5,119.5);
        this.instance_31 = new lib.s1();
        this.instance_31.parent = this;
        this.instance_31.setTransform(784.6,-48,1,1,0,0,180);
        this.instance_32 = new lib.s1();
        this.instance_32.parent = this;
        this.instance_32.setTransform(784.6,-57.4,1,1,0,0,180);
        this.instance_33 = new lib.s1();
        this.instance_33.parent = this;
        this.instance_33.setTransform(964.8,-112,1,1,0,0,180);
        this.instance_34 = new lib.s4();
        this.instance_34.parent = this;
        this.instance_34.setTransform(774.1,-1.8,1,1,0,0,180);
        this.instance_35 = new lib.s4();
        this.instance_35.parent = this;
        this.instance_35.setTransform(659.3,-55.8,1,1,0,0,180);
        this.instance_36 = new lib.s2();
        this.instance_36.parent = this;
        this.instance_36.setTransform(938.1,-115.5,1,1,0,0,180);
        this.instance_37 = new lib.s1();
        this.instance_37.parent = this;
        this.instance_37.setTransform(924.1,-48,1,1,0,0,180);
        this.instance_38 = new lib.s1();
        this.instance_38.parent = this;
        this.instance_38.setTransform(531.7,-23,1,1,0,79.5,-100.5);
        this.instance_39 = new lib.s1();
        this.instance_39.parent = this;
        this.instance_39.setTransform(649.1,18.2,1,1,0,0,180);
        this.instance_40 = new lib.s1();
        this.instance_40.parent = this;
        this.instance_40.setTransform(631.8,-48,1,1,0,0,180);
        this.instance_41 = new lib.s1();
        this.instance_41.parent = this;
        this.instance_41.setTransform(631.8,-57.4,1,1,0,0,180);
        this.instance_42 = new lib.s4();
        this.instance_42.parent = this;
        this.instance_42.setTransform(621.3,-1.8,1,1,0,0,180);
        this.instance_43 = new lib.s4();
        this.instance_43.parent = this;
        this.instance_43.setTransform(557.9,-58.6,1,1,0,0,180);
        this.instance_44 = new lib.s1();
        this.instance_44.parent = this;
        this.instance_44.setTransform(774.1,-24.7,1,1,0,79.5,-100.5);
        this.instance_45 = new lib.s1();
        this.instance_45.parent = this;
        this.instance_45.setTransform(41.6,-68.9,1,1,0,142.8,-37.2);
        this.instance_46 = new lib.s1();
        this.instance_46.parent = this;
        this.instance_46.setTransform(297.2,-50.5,1,1,0,18.7,-161.3);
        this.instance_47 = new lib.s1();
        this.instance_47.parent = this;
        this.instance_47.setTransform(202.1,-41.4,1,1,0,15,-165);
        this.instance_48 = new lib.s1();
        this.instance_48.parent = this;
        this.instance_48.setTransform(110.7,-22.1,1,1,0,-10.7,169.3);
        this.instance_49 = new lib.s1();
        this.instance_49.parent = this;
        this.instance_49.setTransform(37.2,-37.2,1,1,0,144.8,-35.2);
        this.instance_50 = new lib.s1();
        this.instance_50.parent = this;
        this.instance_50.setTransform(242,-43.5,1,1,0,144.8,-35.2);
        this.instance_51 = new lib.s1();
        this.instance_51.parent = this;
        this.instance_51.setTransform(356.6,-67,1,1,0,144.8,-35.2);
        this.instance_52 = new lib.s1();
        this.instance_52.parent = this;
        this.instance_52.setTransform(524.8,-24.7,1,1,0,79.5,-100.5);
        this.instance_53 = new lib.s1();
        this.instance_53.parent = this;
        this.instance_53.setTransform(453.6,-10.2,1,1,0,0,180);
        this.instance_54 = new lib.s1();
        this.instance_54.parent = this;
        this.instance_54.setTransform(728.2,18.2,1,1,0,0,180);
        this.instance_55 = new lib.s1();
        this.instance_55.parent = this;
        this.instance_55.setTransform(585.8,18.2,1,1,0,0,180);
        this.instance_56 = new lib.s1();
        this.instance_56.parent = this;
        this.instance_56.setTransform(568.4,-48,1,1,0,0,180);
        this.instance_57 = new lib.s1();
        this.instance_57.parent = this;
        this.instance_57.setTransform(568.4,-57.4,1,1,0,0,180);
        this.instance_58 = new lib.s4();
        this.instance_58.parent = this;
        this.instance_58.setTransform(336.2,-30.2,1,1,0,0,180);
        this.instance_59 = new lib.s4();
        this.instance_59.parent = this;
        this.instance_59.setTransform(207.1,-65.6,1,1,0,0,180);
        this.instance_60 = new lib.s4();
        this.instance_60.parent = this;
        this.instance_60.setTransform(244.9,-30.2,1,1,0,0,180);
        this.instance_61 = new lib.s4();
        this.instance_61.parent = this;
        this.instance_61.setTransform(288.9,-44.9,1,1,0,0,180);
        this.instance_62 = new lib.s4();
        this.instance_62.parent = this;
        this.instance_62.setTransform(207.1,-19.7,1,1,0,0,180);
        this.instance_63 = new lib.s4();
        this.instance_63.parent = this;
        this.instance_63.setTransform(178.5,-2.7,1,1,0,0,180);
        this.instance_64 = new lib.s4();
        this.instance_64.parent = this;
        this.instance_64.setTransform(102.9,-2.7,1,1,0,0,180);
        this.instance_65 = new lib.s4();
        this.instance_65.parent = this;
        this.instance_65.setTransform(84.1,16.1,1,1,0,0,180);
        this.instance_66 = new lib.s4();
        this.instance_66.parent = this;
        this.instance_66.setTransform(9.1,47.5,1,1,0,0,180);
        this.instance_67 = new lib.s4();
        this.instance_67.parent = this;
        this.instance_67.setTransform(389.3,-44.9,1,1,0,0,180);
        this.instance_68 = new lib.s4();
        this.instance_68.parent = this;
        this.instance_68.setTransform(557.9,-1.8,1,1,0,0,180);
        this.instance_69 = new lib.s4();
        this.instance_69.parent = this;
        this.instance_69.setTransform(494.6,-58.6,1,1,0,0,180);
        this.instance_70 = new lib.s4();
        this.instance_70.parent = this;
        this.instance_70.setTransform(484.4,-87.7,1,1,0,-60.5,119.5);
        this.instance_71 = new lib.s4();
        this.instance_71.parent = this;
        this.instance_71.setTransform(443.1,-55.8,1,1,0,0,180);
        this.instance_72 = new lib.s4();
        this.instance_72.parent = this;
        this.instance_72.setTransform(534.4,-87.7,1,1,0,-60.5,119.5);
        this.instance_73 = new lib.s1();
        this.instance_73.parent = this;
        this.instance_73.setTransform(707.9,-48,1,1,0,0,180);
        this.instance_74 = new lib.s4();
        this.instance_74.parent = this;
        this.instance_74.setTransform(863.9,-125.7,1,1,0,-64.2,115.8,-0.1,-0.1);
        this.instance_75 = new lib.s1();
        this.instance_75.parent = this;
        this.instance_75.setTransform(-712.1,17.9,1,1,-79.5);
        this.instance_76 = new lib.s1();
        this.instance_76.parent = this;
        this.instance_76.setTransform(-712.1,-26.2,1,1,-79.5);
        this.instance_77 = new lib.s1();
        this.instance_77.parent = this;
        this.instance_77.setTransform(-52.7,-70.4,1,1,-142.8);
        this.instance_78 = new lib.s1();
        this.instance_78.parent = this;
        this.instance_78.setTransform(-388.9,-49.2,1,1,-18.7);
        this.instance_79 = new lib.s1();
        this.instance_79.parent = this;
        this.instance_79.setTransform(-223.2,-42.9,1,1,-18.7);
        this.instance_80 = new lib.s1();
        this.instance_80.parent = this;
        this.instance_80.setTransform(-121.8,-23.6,1,1,10.7);
        this.instance_81 = new lib.s1();
        this.instance_81.parent = this;
        this.instance_81.setTransform(-48.3,-38.7,1,1,-144.8);
        this.instance_82 = new lib.s1();
        this.instance_82.parent = this;
        this.instance_82.setTransform(-253.2,-45,1,1,-144.8);
        this.instance_83 = new lib.s1();
        this.instance_83.parent = this;
        this.instance_83.setTransform(-367.8,-68.5,1,1,-144.8);
        this.instance_84 = new lib.s1();
        this.instance_84.parent = this;
        this.instance_84.setTransform(-535.9,-26.2,1,1,-79.5);
        this.instance_85 = new lib.s1();
        this.instance_85.parent = this;
        this.instance_85.setTransform(-464.7,-11.7);
        this.instance_86 = new lib.s1();
        this.instance_86.parent = this;
        this.instance_86.setTransform(-666.2,16.7);
        this.instance_87 = new lib.s1();
        this.instance_87.parent = this;
        this.instance_87.setTransform(-596.9,16.7);
        this.instance_88 = new lib.s1();
        this.instance_88.parent = this;
        this.instance_88.setTransform(-579.6,-49.5);
        this.instance_89 = new lib.s1();
        this.instance_89.parent = this;
        this.instance_89.setTransform(-589.5,-67,1,1,-15.2,0,0,0.1,-0.1);
        this.instance_90 = new lib.s4();
        this.instance_90.parent = this;
        this.instance_90.setTransform(-347.3,-31.7);
        this.instance_91 = new lib.s4();
        this.instance_91.parent = this;
        this.instance_91.setTransform(-256,-31.7);
        this.instance_92 = new lib.s4();
        this.instance_92.parent = this;
        this.instance_92.setTransform(-300.1,-46.4);
        this.instance_93 = new lib.s4();
        this.instance_93.parent = this;
        this.instance_93.setTransform(-218.3,-21.2);
        this.instance_94 = new lib.s4();
        this.instance_94.parent = this;
        this.instance_94.setTransform(-189.6,-4.2);
        this.instance_95 = new lib.s4();
        this.instance_95.parent = this;
        this.instance_95.setTransform(-114.1,-4.2);
        this.instance_96 = new lib.s4();
        this.instance_96.parent = this;
        this.instance_96.setTransform(-95.2,14.6);
        this.instance_97 = new lib.s4();
        this.instance_97.parent = this;
        this.instance_97.setTransform(-32.3,14.6);
        this.instance_98 = new lib.s4();
        this.instance_98.parent = this;
        this.instance_98.setTransform(-400.4,-46.4);
        this.instance_99 = new lib.s4();
        this.instance_99.parent = this;
        this.instance_99.setTransform(-569.1,-3.3);
        this.instance_100 = new lib.s4();
        this.instance_100.parent = this;
        this.instance_100.setTransform(-505.7,-60.1);
        this.instance_101 = new lib.s4();
        this.instance_101.parent = this;
        this.instance_101.setTransform(-454.2,-57.3);
        this.instance_102 = new lib.s1();
        this.instance_102.parent = this;
        this.instance_102.setTransform(-645.9,-49.5);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
        // Layer 1
        this.instance_103 = new lib.smoke_big();
        this.instance_103.parent = this;
        this.instance_103.setTransform(37.9,-0.9,1,1,0,0,0,0.1,0.1);
        this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1028.9,-378,2132.6,796);
    (lib.storm = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{START:0,strike_0:1,strike_1:18,strike_2:35,strike_3:54,strike_4:73,strike_5:93,strike_6:112,strike_7:132,strike_8:153});
        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_17 = function() {
            this.stop();
        }
        this.frame_34 = function() {
            this.stop();
            var icon = exportRoot.scrollIcon
            createjs.Tween.get(icon).to({alpha:0}, 300);
        }
        this.frame_53 = function() {
            this.stop();
        }
        this.frame_72 = function() {
            this.stop();
        }
        this.frame_92 = function() {
            this.stop();
        }
        this.frame_111 = function() {
            this.stop();
        }
        this.frame_131 = function() {
            this.stop();
        }
        this.frame_152 = function() {
            this.stop();
            removeCanvas();
        }
        this.frame_172 = function() {
            this.stop();  
        }
        this.frame_227 = function() {
            this.stop();

        }
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(17).call(this.frame_34).wait(19).call(this.frame_53).wait(19).call(this.frame_72).wait(20).call(this.frame_92).wait(19).call(this.frame_111).wait(20).call(this.frame_131).wait(21).call(this.frame_152).wait(20).call(this.frame_172).wait(55).call(this.frame_227).wait(1));
        // Layer 3
        //this.instance = new lib.mouse();
        //this.instance.parent = this;
        //this.instance.setTransform(960,910.7,1.524,1.524,0,0,0,0,0.3);
        //this.instance._off = true;
        //this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:880.7,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(211));
        // Symbol 9
        this.instance_1 = new lib.Symbol9();
        this.instance_1.parent = this;
        this.instance_1.setTransform(960,350.4);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:340.4,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(211));
        // Symbol 8
        this.instance_2 = new lib.Symbol8();
        this.instance_2.parent = this;
        this.instance_2.setTransform(960,434.2);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:404.2,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(211));
        // protektor
        this.instance_3 = new lib.Tween3("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(960,812.5);
        this.instance_4 = new lib.Tween4("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(960,872.5);
        this.instance_4._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).to({y:840.5},15).wait(2).to({startPosition:0},0).to({_off:true,y:872.5},15,cjs.Ease.get(1)).wait(195));
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},15,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:896.5},17,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:928.5},17,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:962.5},18,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:994.5},17,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:1094.5},18).to({_off:true},1).wait(97));
        // pesok_BIG
        this.instance_5 = new lib.Tween1("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(960,324);
        this.instance_6 = new lib.Tween2("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(960,757);
        this.instance_6._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).to({y:666},15).wait(2).to({startPosition:0},0).to({_off:true,y:757},15,cjs.Ease.get(1)).wait(195));
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},15,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:853.1},17,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:941.1},17,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:1051.1},18,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:1181.9},17,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:1321.9},18).wait(2).to({startPosition:0},0).to({y:1441.9},19,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({y:1625.9},18,cjs.Ease.get(1)).to({_off:true},1).wait(56));
        // animation_2
        this.instance_7 = new lib.ANIMATION_2();
        this.instance_7.parent = this;
        this.instance_7.setTransform(952.3,172.1,1,1,0,0,0,17.8,21.8);
        this.instance_7._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({_off:true},15).wait(210));
        // stop_2
        this.instance_8 = new lib.STOP_2();
        this.instance_8.parent = this;
        this.instance_8.setTransform(933.8,281.1);
        this.instance_8._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},17).wait(210));
        // animation_2
        this.instance_9 = new lib.ANIMATION_2();
        this.instance_9.parent = this;
        this.instance_9.setTransform(952.3,332.1,1,1,0,0,0,17.8,21.8);
        this.instance_9._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({_off:true},17).wait(193));
        // animation_1
        this.instance_10 = new lib.ANIMATION_1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(906.4,373.5);
        this.instance_10._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({_off:false},0).to({_off:true},19).wait(174));
        // stop_1
        this.instance_11 = new lib.STOP_1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(943.8,332.5);
        this.instance_11._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({_off:true},17).wait(193));
        // animation_1
        this.instance_12 = new lib.ANIMATION_1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(906.4,515.5);
        this.instance_12._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).to({_off:true},19).wait(155));
        // stop_1
        this.instance_13 = new lib.STOP_1();
        this.instance_13.parent = this;
        this.instance_13.setTransform(943.8,474.5);
        this.instance_13._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(35).to({_off:false},0).to({_off:true},20).wait(173));
        // stop_2
        this.instance_14 = new lib.STOP_2();
        this.instance_14.parent = this;
        this.instance_14.setTransform(933.8,587.1);
        this.instance_14._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(54).to({_off:false},0).to({_off:true},20).wait(154));
        // animation_2
        this.instance_15 = new lib.ANIMATION_2();
        this.instance_15.parent = this;
        this.instance_15.setTransform(952.3,638.1,1,1,0,0,0,17.8,21.8);
        this.instance_15._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(73).to({_off:false},0).to({_off:true},20).wait(135));
        // stop_2
        this.instance_16 = new lib.STOP_2();
        this.instance_16.parent = this;
        this.instance_16.setTransform(933.8,647.1);
        this.instance_16._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(73).to({_off:false},0).to({_off:true},20).wait(135));
        // animation_2
        this.instance_17 = new lib.ANIMATION_2();
        this.instance_17.parent = this;
        this.instance_17.setTransform(952.3,698.1,1,1,0,0,0,17.8,21.8);
        this.instance_17._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(93).to({_off:false},0).to({_off:true},19).wait(116));
        // animation_1
        this.instance_18 = new lib.ANIMATION_1();
        this.instance_18.parent = this;
        this.instance_18.setTransform(906.4,781.5);
        this.instance_18._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(112).to({_off:false},0).to({_off:true},20).wait(96));
        // stop_1
        this.instance_19 = new lib.STOP_1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(943.8,740.5);
        this.instance_19._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(93).to({_off:false},0).to({_off:true},19).wait(116));
        // stop_2
        this.instance_20 = new lib.STOP_2();
        this.instance_20.parent = this;
        this.instance_20.setTransform(933.8,907.1);
        this.instance_20._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(112).to({_off:false},0).to({_off:true},20).wait(96));
        // animation_2
        this.instance_21 = new lib.ANIMATION_2();
        this.instance_21.parent = this;
        this.instance_21.setTransform(952.3,958.1,1,1,0,0,0,17.8,21.8);
        this.instance_21._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(132).to({_off:false},0).to({_off:true},21).wait(75));
        // animation_1
        this.instance_22 = new lib.ANIMATION_1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(906.4,1067.5);
        this.instance_22._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(153).to({_off:false},0).wait(75));
        // stop_1
        this.instance_23 = new lib.STOP_1();
        this.instance_23.parent = this;
        this.instance_23.setTransform(943.8,1026.5);
        this.instance_23._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(132).to({_off:false},0).to({_off:true},21).wait(75));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-216,1920,1894);
// stage content:
    (lib.storm_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer 3
        this.scrollIcon = new lib.mouse();
        this.scrollIcon.parent = this;
        this.scrollIcon.setTransform(960,708.5,1.524,1.524,0,0,0,0,0.3);
        this.timeline.addTween(cjs.Tween.get(this.scrollIcon).wait(1));
        // Layer 1
        this.stormWrap = new lib.storm();
        this.stormWrap.parent = this;
        this.stormWrap.setTransform(958.2,409.9,1,1,0,0,0,958.2,408.9);
        this.timeline.addTween(cjs.Tween.get(this.stormWrap).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(960,325,1920,1894);
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;