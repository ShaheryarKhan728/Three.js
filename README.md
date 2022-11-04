# 2D Rain Scene
This is a computer graphics mini project. It is a 2D Scene rain scene.

It is developed using JS 3D library THREE.JS.

FIrstly, I created a renderer reference to process my scene on GPU. Then I have set its size as the size of my browser window. 

Then, I setup a perspective camera that behaves / views like a human eye and set its position on positive z axis because we will be looking into the screen and that considers as -z axis.

Then, I created a scene and applied a background image on it by using MeshLamberMaterial and combine it with plane geometry of size equals to browser window and added it into our scene.

I also added point light in our scene to make the image glow for better viewing experience of lightning.

Then, I tried to add a background audio of rain that did not go well nad I have to work on this yet.

Now comes the main part, i.e, Rain drops. I generated 2 random values of x and y to set the position of rain drops on the screen.

I also generated a number, determining the size of rain drops and set it between 0.5 to 4 units.

I run the for loop to generate 1000 rain drops to show on screen at once and added them in an array named points.

To show the points on screen I made LineBasicMaterial and used LineSegments class to make a geometry and gives it my points array to make a geometry.

Then, I combine this material and geometry to make a line mesh and added it into the scene. And then used my 2 random funcitons defined above to set their random position on screen in x and y axis.

Finally, I rendered the scene and after it gives the length of my point array to 0 to remove all the previous points from it and also clear the scene from previous line mesh.

I added all this points generation and redering procedure in an infinite animate loop to show the scene endlessly.

How to run:
Go into the files and run file named 'rain.html' to view the scene on browser window.
