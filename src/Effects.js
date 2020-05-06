import { GlowLayer } from "@babylonjs/core/Layers/GlowLayer";


const Effects ={

    add: function(mesh,scene){
        let gl = new GlowLayer("",scene);
        gl.intensity = 2.5;
        gl.customEmissiveColorSelector = function(mesh, subMesh, material, result) {
            if (mesh.name === "CurveRail_0") {
                result.set(1, 1, 0, 1);
            } else {
                result.set(0, 0, 0, 0);
            }
        }
        
    }

};

export {Effects};