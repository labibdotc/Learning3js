
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { BufferAttribute } from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object

const geometry= new THREE.BufferGeometry()
const count = 1000 //triangles -> 3 points per triangle
const vertices = new Float32Array(count*3*3)

for(let i = 0; i < count*3*3; i++) {
    vertices[i] = Math.random()-0.5
}

// const vertices = new Float32Array( [
//     0,0,0,
//     0,1,0,
//     1,0,0
// ])
geometry.setAttribute("position", new BufferAttribute(vertices,3))
const material = new THREE.MeshBasicMaterial( { color: 0x0000FF, wireframe: true} );
const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
     //for performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// // Animate
const clock = new THREE.Clock()

const tick = () =>
{

    camera.lookAt(mesh.position)
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()