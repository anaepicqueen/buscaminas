var minas = laTabla();	

			function laTabla(){
				var tabla = [];
				for(var i = 0; i < 8; i++){			        
			        tabla[i] = [0,0,0,0,0,0,0,0];			        
			    }
			    return tabla;
			}		

			function hacerTablero(){
				for(var i = 0; i < 8; i++){
			        for(var j = 0; j < 8; j++){			           
			           var div = document.createElement("div");
			            div.id = i + "" + j;			            
			            div.addEventListener("click",mostrarNum, true);			            
			            tablerominas.appendChild(div);
			        }
			    }		    
			    
			}

			function mostrarNum(e){
				var elnumero = this.id.split("");				
				var elid = elnumero[0] + elnumero[1];			
				divObj = document.getElementById(elid);

				if(minas[parseInt(elnumero[0],10)][parseInt(elnumero[1],10)] == 0){
					divObj.style.backgroundColor = "#f3ebe0";					
					abrirAlrededor(parseInt(elnumero[0],10),parseInt(elnumero[1],10),minas);
				}else{
					if(minas[parseInt(elnumero[0],10)][parseInt(elnumero[1],10)] != "*"){
						document.getElementById(elid).innerHTML = "<p style='margin-top:15px;'>" + minas[parseInt(elnumero[0],10)][parseInt(elnumero[1],10)] + "</p>";
						divObj.style.backgroundColor = "#f3ebe0";
					}else{
						divObj.style.backgroundImage = "url(img/bomba.jpg)";						
						abrirTablero(minas);
						alert("Perdiste Chatis");
					}
				}						
			}				

			function bombasAlrededor(tablero){
				for(var i = 0; i < 8; i++){
			        for(var j = 0; j < 8; j++){			           
			           if(tablero[i][j] == "*"){
			           		if(i == 0 && j == 0){
			           			colocaNumeroBombas(i, j, i + 1, j + 1,tablero);
			           		}
			           		else if (i == 0 && (j > 0 && j < 7)) {
			           			colocaNumeroBombas(i, j - 1, i + 1, j + 1,tablero);
			           		}
			           		else if(i == 0 && j == 7){
			           			colocaNumeroBombas(i, j - 1, i + 1, j,tablero);
			           		}
			           		else if(j == 7 && (i > 0 && i < 7)){
			           			colocaNumeroBombas(i - 1, j - 1, i + 1, j,tablero);
			           		}
			           		else if(i == 7 && j == 7){
			           			colocaNumeroBombas(i - 1, j - 1, i, j,tablero);
			           		}
			           		else if(i == 7 && (j > 0 && j < 7)){
			           			colocaNumeroBombas(i - 1, j - 1, i, j + 1,tablero);
			           		}
			           		else if(i == 7 && j == 0){
			           			colocaNumeroBombas(i - 1, j, i, j + 1,tablero);
			           		}
			           		else if(j == 0 && (i > 0 && i < 7)){
			           			colocaNumeroBombas(i - 1, j, i + 1, j + 1,tablero);
			           		}else{
			           			colocaNumeroBombas(i - 1, j - 1, i + 1, j + 1,tablero);
			           		}
			           }
			        }
			    }
			}

			function colocaNumeroBombas(vari,varj,fini,finj,tablero){
				for(var i = vari; i <= fini; i++){
			        for(var j = varj; j <= finj; j++){			           
			           if(tablero[i][j] != "*"){
			           		tablero[i][j] = (parseInt(tablero[i][j])+1);		           		
			           }
			        }
			    }
			}

			function hacerBombas(tablero){
				var fil = 0;
				var col = 0;

				fil = Math.floor((Math.random()*7)+0);
				col = Math.floor((Math.random()*7)+0);

				for(var i = 0; i < 8; i++){
					while (tablero[fil][col] == "*"){
						fil = Math.floor((Math.random()*7)+0);
						col = Math.floor((Math.random()*7)+0);
					}
					tablero[fil][col] = "*";			
				}
			}

			function ponerCeros(vari,varj,fini,finj,cori,corj,tablero){
				for(var i = vari; i <= fini; i++){
			        for(var j = varj; j <= finj; j++){		
			        	var elid = i+""+j;
			        	var objDiv =  document.getElementById(elid)	           
			           if(objDiv.textContent == ""){			           		
			           		if(tablero[i][j] == 0){			           			
			           			if(i == cori && j == corj){			           				
			           				objDiv.textContent = ""	; 
			           				objDiv.style.backgroundColor = "#f3ebe0";	          				
			           			}else{
			           				if(objDiv.style.backgroundColor != "#f3ebe0"){
			           					abrirAlrededor(i, j,tablero);
			           				}			           				
			           			}

			           		}else{
			           			if(tablero[i][j] != "*"){
			           				document.getElementById(elid).innerHTML = "<p style='margin-top:15px;'>" + tablero[i][j] + "</p>"; 
			           				objDiv.style.backgroundColor = "#f3ebe0";	
			           			}
			           		}			           			           		
			           }			           
			        }
			    }
			}

			function abrirAlrededor(xi,xj,tablero){
				if(xi == 0 && xj == 0){
					ponerCeros(xi, xj, xi + 1, xj + 1, xi, xj,tablero);
				}
				else if(xi == 0 && (xj > 0 && xj < 7)){
					ponerCeros(xi, xj - 1, xi + 1, xj + 1, xi, xj,tablero);
				}
				else if(xi == 0 && xj == 7){
					ponerCeros(xi, xj - 1, xi + 1, xj, xi, xj,tablero);
				}
				else if(xj == 7 && (xi > 0 && xi < 7)){
					ponerCeros(xi - 1, xj - 1, xi + 1, xj, xi, xj,tablero);
				}
				else if(xi == 7 && xj == 7){
					ponerCeros(xi - 1, xj - 1, xi, xj, xi, xj,tablero);
				}
				else if(xi == 7 && (xj > 0 && xj < 7)){
					ponerCeros(xi - 1, xj - 1, xi, xj + 1, xi, xj,tablero);
				}
				else if(xi == 7 && xj == 0){
					ponerCeros(xi - 1, xj, xi, xj + 1, xi, xj,tablero);
				}
				else if(xj == 0 && (xi > 0 && xi < 7)){
					ponerCeros(xi - 1, xj, xi + 1, xj + 1, xi, xj,tablero);
				}else{
					ponerCeros(xi - 1, xj - 1, xi + 1, xj + 1, xi, xj,tablero);
				}
			} 

			function abrirTablero(tablero){
				for(var i = 0; i < 8; i++){
			        for(var j = 0; j < 8; j++){	
			        	var elid = i+""+j;
			        	var objDiv =  document.getElementById(elid);		           
			           if(tablero[i][j] == "*"){			        		
			           		objDiv.style.backgroundImage = "url(img/bomba.png)";
			           }
			        }
			    }
			}		