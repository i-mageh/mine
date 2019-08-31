/**
 * 纹理构造器, 创建一个纹理贴图，将其应用到一个表面，或者作为反射/折射贴图。
 */
export class TextureFacetory {

    static getInstance() {
        if (!TextureFacetory.instance) {
            TextureFacetory.instance = new TextureFacetory();
        }
        return TextureFacetory.instance;
    }

    constructor() {
        this.Loader  = new THREE.TextureLoader();
    }

    getTexture(name) {
        let img = require('../../../asset/textures/default/blocks/' + name + '.png');
        // 创建一个纹理加载
        let texture = new THREE.TextureLoader().load(img);
        return texture;
    }
}
