
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

export function Code() {
  const [showPython, setShowPython] = useState(true);
  const [showArduino, setShowArduino] = useState(false);

  const PythonCode = () => {
    const pythonCodeString = `import cv2
    import mediapipe as mp
    #---------------------------------------------
    import serial
    import time
    #---------------------------------------------
    import math
    
    # ---------------------------------------------
    # Configuración de OpenCV y MediaPipe
    # ---------------------------------------------
    mp_dibujo = mp.solutions.drawing_utils
    mp_manos = mp.solutions.hands
    cap = cv2.VideoCapture(0)
    
    # ---------------------------------------------
    # Configuración de la comunicación con Arduino
    # ---------------------------------------------
    # arduino = serial.Serial('COM4', 9600)
    
    # ---------------------------------------------
    # Bucle principal
    # ---------------------------------------------
    
    
    
    #funciones 
    #---------------------------------------------
    
    def calcular_distancia(punto_dedo, landmark_wrist):
                        return math.sqrt(
                            (punto_dedo.x - landmark_wrist.x) ** 2 +
                            (punto_dedo.y - landmark_wrist.y) ** 2 +
                            (punto_dedo.z - landmark_wrist.z) ** 2
                        )
                        
    def redondear_distancia(distancia):
                        return round(distancia, 1) if distancia > 0.19 else 0.19
                        
    def dibujar_rectangulo_y_texto(frame, punto_dedo, color_rectangulo=(0, 255, 0), color_texto=(255, 255, 255)):
        x, y = int(punto_dedo.x * frame.shape[1]), int(punto_dedo.y * frame.shape[0])
        cv2.rectangle(frame, (x - 10, y - 10), (x + 10, y + 10), color_rectangulo, 2)
        distancia_dedo = calcular_distancia(punto_dedo, landmarks.landmark[mp_manos.HandLandmark.WRIST])
        distancia_dedo = redondear_distancia(distancia_dedo)
        cv2.putText(frame, f"{distancia_dedo}", (x - 20, y - 20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color_texto, 2)
        
    #---------------------------------------------
                          
    with mp_manos.Hands(min_detection_confidence=0.5, min_tracking_confidence=0.5) as manos:
        prev_puntas_dedos = [None, None, None, None, None]
        last_send_time = time.time()
    
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                continue
    
            frame = cv2.flip(frame, 1)
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            resultados = manos.process(frame_rgb)
            
            cv2.putText(frame, f"@Eanz", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
            
    
            if resultados.multi_hand_landmarks:
                for landmarks in resultados.multi_hand_landmarks:
                    puntas_dedos = [
                        landmarks.landmark[mp_manos.HandLandmark.THUMB_TIP],
                        landmarks.landmark[mp_manos.HandLandmark.INDEX_FINGER_TIP],
                        landmarks.landmark[mp_manos.HandLandmark.MIDDLE_FINGER_TIP],
                        landmarks.landmark[mp_manos.HandLandmark.RING_FINGER_TIP],
                        landmarks.landmark[mp_manos.HandLandmark.PINKY_TIP]
                    ]
    
                    umbral_cierre = 0.19
    
                 
                        
                for i, punto_dedo in enumerate(puntas_dedos):
                    dibujar_rectangulo_y_texto(frame, punto_dedo)
                  
                        
                        
                    
                
                    distancia_gordo = calcular_distancia(puntas_dedos[0], landmarks.landmark[mp_manos.HandLandmark.WRIST])
                    
                    distancia_indice_palma = calcular_distancia(puntas_dedos[1], landmarks.landmark[mp_manos.HandLandmark.WRIST])
                    
                    distancia_middele = calcular_distancia(puntas_dedos[2], landmarks.landmark[mp_manos.HandLandmark.WRIST])
                    
                    distancia_anular = calcular_distancia(puntas_dedos[3], landmarks.landmark[mp_manos.HandLandmark.WRIST])
                    
                    distancia_pinky = calcular_distancia(puntas_dedos[4], landmarks.landmark[mp_manos.HandLandmark.WRIST])
    `;

    return (
      <SyntaxHighlighter language="python" style={prism} className="python-highlighter">
        {pythonCodeString}
      </SyntaxHighlighter>
    );
  };

  const ArduinoCode = () => {
    const arduinoCodeString = `#include <Servo.h>

    Servo S1;
    Servo S2;
    Servo S3;
    Servo S4;
    Servo S5;
    
    int Serv1 = 7;
    int Serv2 = 8;
    int Serv3 = 9;
    int Serv4 = 10;
    int Servo5 = 11;
    
    int targetPos1 = 0;
    int targetPos2 = 0;
    int targetPos3 = 0;
    int targetPos4 = 0;
    int targetPos5 = 0;
    
    int currentPos1 = 0;
    int currentPos2 = 0;
    int currentPos3 = 0;
    int currentPos4 = 0;
    int currentPos5 = 0;
    
    int step = 1;
    int stepDelay = 2; // Tiempo de retardo entre pasos
    
    void setup() {
      Serial.begin(9600);
      S1.attach(Serv1);
      S2.attach(Serv2);
      S3.attach(Serv3);
      S4.attach(Serv4);
      S5.attach(Servo5);
    }
    
    void loop() {
      if (Serial.available() > 0) {
        char data = Serial.read();
        Serial.print("Datos recibidos: ");
        Serial.println(data);
    
        // Implementa el control de transiciones suaves aquí
        if (data == '3') {
          targetPos1 = 180;
        } else if (data == '4') {
          targetPos1 = 0;
        }
    
        if (data == '5') {
          targetPos2 = 180;
        } else if (data == '6') {
          targetPos2 = 0;
        }
    
        if (data == '7') {
          targetPos3 = 180;
        } else if (data == '8') {
          targetPos3 = 0;
        }
      }
    
      // Implementa el control suave de los servos aquí
      if (currentPos1 != targetPos1) {
        if (currentPos1 < targetPos1) {
          currentPos1 += step;
        } else {
          currentPos1 -= step;
        }
        S1.write(currentPos1);
        delay(stepDelay);
      }
    
      if (currentPos2 != targetPos2) {
        if (currentPos2 < targetPos2) {
          currentPos2 += step;
        } else {
          currentPos2 -= step;
        }
        S2.write(currentPos2);
        delay(stepDelay);
      }
    
      if (currentPos3 != targetPos3) {
        if (currentPos3 < targetPos3) {
          currentPos3 += step;
        } else {
          currentPos3 -= step;
        }
        S3.write(currentPos3);
        delay(stepDelay);
      }
    }`;

    return (
      <SyntaxHighlighter language="arduino" style={prism}>
        {arduinoCodeString}
      </SyntaxHighlighter>
    );
  };


  const showPythonCode = () => {
    setShowPython(true);
    setShowArduino(false);
  };

  const showArduinoCode = () => {
    setShowPython(false);
    setShowArduino(true);
  };

  return (
    <div>
      <div className="flex_btn_content">
        <button className='Showbtn' onClick={showPythonCode}>Mostrar Python</button>
        <button className='Showbtn' onClick={showArduinoCode}>Mostrar Arduino</button>

      </div>
      {showPython && (

        <div className='pythoncode'>
          <h3>Python Code</h3>
          <PythonCode />
        </div>
      )}
      {showArduino && (
        <div className='pythoncode'>
          <h3>Arduino Code</h3>
          <ArduinoCode />
        </div>
      )}

    </div>
  );
}
