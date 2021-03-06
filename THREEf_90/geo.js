var geo = new THREE.BufferGeometry();
geo.faceIndices = new Uint32Array( [ 0, 4, 5, 0, 5, 1, 1, 5, 6, 1, 6, 2, 2, 6, 7, 2, 7, 3, 4, 8, 9, 4, 9, 5, 5, 9, 10, 5, 10, 6, 6, 10, 11, 6, 11, 7, 8, 12, 13, 8, 13, 9, 9, 13, 14, 9, 14, 10, 10, 14, 15, 10, 15, 11 ] );
geo.vertices = new Float32Array( [ 0.23, -0.5, 0, 0.29, -0.17, 0, -0.38, 0.16, 0, -0.32, 0.5, 0, -0.12, -0.5, -0.21, -0.15, -0.17, -0.26, 0.18, 0.16, 0.32, 0.15, 0.5, 0.27, -0.12, -0.5, 0.2, -0.15, -0.17, 0.25, 0.18, 0.16, -0.33, 0.15, 0.5, -0.28, 0.23, -0.5, 0, 0.29, -0.17, 0, -0.38, 0.16, -0.01, -0.32, 0.5, -0.01 ] );
geo.normals = new Float32Array( [ 0.49, -0.08, -0.87, 0.49, -0.08, -0.87, -0.5, -0.2, 0.84, -0.5, 0.07, 0.86, -0.5, -0.16, -0.86, 0.14, 0.19, -0.97, 0.91, -0.2, 0.35, 0.49, 0.15, 0.85, -0.5, -0.16, 0.85, -0.92, 0.19, 0.35, -0.15, -0.2, -0.97, 0.49, 0.15, -0.86, 0.49, -0.08, 0.86, 0.49, 0.19, 0.84, -0.5, 0.07, -0.87, -0.5, 0.07, -0.87 ] );
geo.uvs = new Float32Array( [ 0, 0, 0, 0.33, 0, 0.66, 0, 1, 0.33, 0, 0.33, 0.33, 0.33, 0.66, 0.33, 1, 0.66, 0, 0.66, 0.33, 0.66, 0.66, 0.66, 1, 1, 0, 1, 0.33, 1, 0.66, 1, 1 ] );
geo.setIndex( new THREE.BufferAttribute( geo.faceIndices, 1 ) );
geo.addAttribute( 'position', new THREE.BufferAttribute( geo.vertices, 3 ).setDynamic( true ) );
geo.addAttribute( 'normal', new THREE.BufferAttribute( geo.normals, 3 ).setDynamic( true ) );
geo.addAttribute( 'uv', new THREE.BufferAttribute( geo.uvs, 2 ) );
var geoGrp = [ 0, 3, 1, 3, 3, 1, 6, 3, 1, 9, 3, 1, 12, 3, 1, 15, 3, 1, 18, 3, 4, 21, 3, 4, 24, 3, 4, 27, 3, 4, 30, 3, 4, 33, 3, 4, 36, 3, 8, 39, 3, 8, 42, 3, 8, 45, 3, 8, 48, 3, 8, 51, 3, 8 ]; 
for ( var f = 0, p = 0; f < 18; f ++, p += 3 ) { geo.addGroup( geoGrp[ p ], geoGrp[ p + 1 ], geoGrp[ p + 2 ] ); }
geo.lineGeometry = new THREE.BufferGeometry();
geo.quadColor = 0x110011;
geo.quadLine = new THREE.Line( geo.lineGeometry, new THREE.LineBasicMaterial( { color: geo.quadColor } ) );
geo.linePositions = new Float32Array( [ -0.32, 0.5, 0, 0.15, 0.5, 0.27, 0.15, 0.5, -0.28, -0.32, 0.5, -0.01, -0.38, 0.16, -0.01, 0.18, 0.16, -0.33, 0.18, 0.16, 0.32, -0.38, 0.16, 0, 0.29, -0.17, 0, -0.15, -0.17, -0.26, -0.15, -0.17, 0.25, 0.29, -0.17, 0, 0.23, -0.5, 0, -0.12, -0.5, 0.2, -0.12, -0.5, -0.21, 0.23, -0.5, 0, 0.23, -0.5, 0, 0.29, -0.17, 0, -0.38, 0.16, 0, -0.32, 0.5, 0, 0.15, 0.5, 0.27, 0.18, 0.16, 0.32, -0.15, -0.17, -0.26, -0.12, -0.5, -0.21, -0.12, -0.5, 0.2, -0.15, -0.17, 0.25, 0.18, 0.16, -0.33, 0.15, 0.5, -0.28, -0.32, 0.5, -0.01, -0.38, 0.16, -0.01, 0.29, -0.17, 0, 0.23, -0.5, 0 ] );
geo.lineGeometry.addAttribute( 'position', new THREE.BufferAttribute( geo.linePositions, 3 ) );
