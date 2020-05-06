
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

import {} from "@babylonjs/loaders/glTF/2.0/glTFLoader";



const ImportModel ={

    /**
     * 
     * @param {*} meshName 
     * @param {*} rootURLPath 
     * @param {*} sceneFilename 
     * @param {*} scene 
     */
    importMeshModel: function(meshName,rootURLPath,sceneFilename,scene){
        SceneLoader.ImportMesh(meshName, rootURLPath, sceneFilename, scene,function(result){

        });
    },

    // not work yet
    importBabylonFormat: function(rootUrl,sceneFilename,engine){
        SceneLoader.Load(rootUrl,sceneFilename,engine);

    }
};

export {ImportModel};