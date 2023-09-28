//
//  ChatView.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import SwiftUI

struct ChatView: View {
    @ObservedObject var viewModel: ChatViewModel
    @State var inputText: String = ""
    
    private func send () {
        viewModel.send(message: inputText)
        inputText = ""
    }
    
    private func isMine (incomeId: String?) -> Direction {
        guard let uuid = UserDefaults.standard.string(forKey: DefaultKey.UUID.rawValue)  else { return .left }
        guard let msgId = incomeId else { return .left }
        return uuid == msgId ? .right : .left
    }
    
    var body: some View {
        VStack {
            ScrollView{
                ForEach(viewModel.chat) { item in
                    if let type = item.type,  type == MessageType.MESSAGE.rawValue {
                        Bubble(direction: isMine(incomeId: item.uuid )) {
                            Text(item.msg ?? "")
                            .padding(.all, 20)
                            .foregroundColor(Color.white)
                            .background(isMine(incomeId: item.uuid) == .right ? Color.blue : Color.gray)
                        }
                    } else {
                        Notice {
                            Text(item.msg ?? "")
                        }
                        .padding(.bottom, 40)
                    }
                    
                }
            }
            InputField(textInput: $inputText, send: send)
        }
        .onAppear{
            viewModel.initialize()
        }
        .onDisappear{
            viewModel.destory()
        }
       
    }
    
}

//#Preview {
//    ChatView(viewModel: ChatViewModel(client: StompManager.shared))
//}

struct ChatView_Previews: PreviewProvider {
    
    static var previews: some View {
        ChatView(viewModel: ChatViewModel(client: StompManager.shared))
    }
}
