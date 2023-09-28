//
//  Input.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import SwiftUI

struct InputField: View {
    @Binding var textInput: String
    var send: (()->Void)
    
    var body: some View {
        HStack {
            TextField(text: $textInput) {
                Text("내용을 입력하세요.")
            }
            .padding()
            .textFieldStyle(.roundedBorder)
            .textInputAutocapitalization(.never)
            .autocorrectionDisabled(true)
            
            
            Button("전송") {
                send()
            }
            .buttonStyle(.borderedProminent)
            .padding(.trailing)
        }
        .background(Color(UIColor(rgb: 0xecece9)))
        
    }
}

struct InputField_Previews: PreviewProvider {
    static var previews: some View {
        InputField(textInput: .constant(""), send: {})
    }
}
