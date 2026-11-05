var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.7337759332085252,
          "pitch": -0.24213858823753398,
          "rotation": 1.5707963267948966,
          "target": "2-disable-toilet-pm"
        },
        {
          "yaw": -0.3801035492644189,
          "pitch": 0.024867466481465428,
          "rotation": 0,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-enrty-2",
      "name": "enrty 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -0.07796260530261101,
          "pitch": 0.1261651498070666,
          "rotation": 0,
          "target": "3-communal-room"
        },
        {
          "yaw": 0.4883129859672586,
          "pitch": 0.14098167676583273,
          "rotation": 0,
          "target": "2-disable-toilet-pm"
        },
        {
          "yaw": -1.7840533144104676,
          "pitch": 0.08860047358201228,
          "rotation": 0,
          "target": "5-corridor"
        },
        {
          "yaw": -3.0511445860987294,
          "pitch": 0.1286763958556385,
          "rotation": 0,
          "target": "4-office-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-disable-toilet-pm",
      "name": "DISABLE TOILET PM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -2.5944296955592137,
          "pitch": -0.14694805148860546,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-communal-room",
      "name": "communal room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -2.984686488611631,
          "pitch": 0.0003063067660757923,
          "rotation": 0,
          "target": "1-enrty-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office-1",
      "name": "office 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0122403144676184,
        "pitch": 0.15436883927315392,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 2.5320840728472085,
          "pitch": 0.2108386540581808,
          "rotation": 0,
          "target": "1-enrty-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor",
      "name": "corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.8083393468643969,
          "pitch": 0.19901750396373608,
          "rotation": 1.5707963267948966,
          "target": "1-enrty-2"
        },
        {
          "yaw": -0.06826420638392428,
          "pitch": -0.11700304674778117,
          "rotation": 0,
          "target": "7-kitchen-pm"
        },
        {
          "yaw": -0.4066910525022358,
          "pitch": 0.18533150118930308,
          "rotation": 4.71238898038469,
          "target": "6-utility"
        },
        {
          "yaw": 0.1683429873221236,
          "pitch": -0.29292390033839766,
          "rotation": 0,
          "target": "9-bed-1st-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-utility",
      "name": "utility",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3535620684137335,
        "pitch": 0.20830635464658798,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 2.103453338261861,
          "pitch": 0.16554127029521126,
          "rotation": 0,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen-pm",
      "name": "KITCHEN PM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 3.078634152384211,
          "pitch": 0.009062419579922931,
          "rotation": 0,
          "target": "5-corridor"
        },
        {
          "yaw": 0.04656743686689602,
          "pitch": 0.11177162554538711,
          "rotation": 0,
          "target": "8-kitchen-pm1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen-pm1",
      "name": "KITCHEN PM1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 3.1238780169492824,
          "pitch": 0.09165975267224624,
          "rotation": 0,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bed-1st-floor",
      "name": "bed 1st floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.6917577704827238,
          "pitch": 0.1019991841439527,
          "rotation": 6.283185307179586,
          "target": "5-corridor"
        },
        {
          "yaw": 1.6213473379458732,
          "pitch": 0.0473082236689244,
          "rotation": 0,
          "target": "10-washroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-washroom-3",
      "name": "WASHROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 2.3113552759471565,
          "pitch": -0.0472409270397538,
          "rotation": 1.5707963267948966,
          "target": "9-bed-1st-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ST.ALBANS CHURCH",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
