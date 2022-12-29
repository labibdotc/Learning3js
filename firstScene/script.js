const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry( 1, 1, 1 ) //width, depth and height
const material = new THREE.MeshBasicMaterial( { color: 'red' } ) //#ff0000 or 0xff0000 -> r: full g: no b: no
const mesh = new THREE.Mesh( geometry, material ) //mesh combosed of geometry and then material
scene.add( mesh )


const sizes = {
    width: 800,
    height: 600
}
//camera (pov)
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z=3
camera.position.x=-1
camera.position.y=-1
scene.add(camera) //adds camera to the scene


//render now
const canvas = document.querySelector('.webgl')
// console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera) 

//we now use the position property to move camera to see the box
//position uses x,y and z

//forward/backward is z
