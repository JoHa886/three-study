import { BoxGeometry, Mesh, MeshStandardMaterial, Matrix4, MathUtils, TextureLoader } from 'three';
import textureUrl from '@/assets/textures/uv-test-bw.png';

function createMaterial() {
    // create a texture loader.
    const textureLoader = new TextureLoader();

    // load a texture
    // const texture = textureLoader.load(
    //     '../../assets/textures/uv-test-col.png',
    // );
    const texture = textureLoader.load(
        textureUrl,
        (texture) => {
            console.log('Texture loaded successfully.');
        },
        (xhr) => {
            console.log(`Texture ${xhr.loaded / xhr.total * 100}% loaded`);
        },
        (error) => {
            console.error('An error occurred while loading the texture:', error);
        }
    );


    // create a "standard" material
    // const material = new MeshStandardMaterial({ color: 'purple' });

    const material = new MeshStandardMaterial({
        map: texture,
    });

    return material;
}

function createCube() {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2);

    // Switch the old "basic" material to
    // a physically correct "standard" material
    // const material = new MeshStandardMaterial({ color: "purple" });
    // 创建纹理
    const material = createMaterial();

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8);
    // cube.scale.set(2, 2, 2);
    // // 创建一个4x4矩阵
    // const matrix = new Matrix4();

    // // 创建平移矩阵
    // const translation = new Matrix4().makeTranslation(1, 2, 1);

    // // 创建旋转矩阵（绕Z轴旋转45度）
    // const rotation = new Matrix4().makeRotationZ(Math.PI / 4);

    // // 创建缩放矩阵
    // const scale = new Matrix4().makeScale(2, 2, 2);

    // // 组合变换矩阵（先旋转，再平移，再缩放）
    // matrix.multiplyMatrices(rotation, translation);
    // matrix.multiply(scale);

    // cube.applyMatrix4(matrix);
    // this method will be called once per frame
    const radiansPerSecond = MathUtils.degToRad(30);
    cube.tick = delta => {
        // increase the cube's rotation each frame
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

export { createCube };