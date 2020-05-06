import { GlowLayer } from "@babylonjs/core/Layers/GlowLayer";


const Effects ={

    add: function(mesh,scene){
        let gl = new GlowLayer.GlowLayer("",scene);
        gl.customEmissiveColorSelector = function(mesh, subMesh, material, result) {
            if (mesh.name === "Gear") {
                result.set(1, 0, 1, 1);
            } else {
                result.set(0, 0, 0, 0);
            }
        }
    }

};

export {Effects};