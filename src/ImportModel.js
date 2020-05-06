
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";



const ImportModel ={

    /**
     * 
     * @param {*} meshName 
     * @param {*} rootURLPath 
     * @param {*} sceneFilename 
     * @param {*} scene 
     */
    importMeshModel: function(meshName,rootURLPath,sceneFilename,scene){
        SceneLoader.ImportMeshAsync(meshName, rootURLPath, sceneFilename, scene).then((result)=> {

        });
    },

    // not work yet
    importBabylonFormat: function(rootUrl,sceneFilename,engine){
        SceneLoader.Load(rootUrl,sceneFilename,engine);

    }
};

export {ImportModel};