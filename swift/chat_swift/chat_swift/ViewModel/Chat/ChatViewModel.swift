//
//  ChatViewModel.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import Foundation
import StompClientLib
import SwiftUI

class ChatViewModel: ObservableObject {
    var client: StompManager
    
    private lazy var encoder: JSONEncoder = {
        return JSONEncoder()
    }()
    private lazy var decoder: JSONDecoder = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd HH:mm"
        
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .formatted(dateFormatter)
        return decoder
    }()

    @Published var chat: [MessageBody] = []
    
    
    
    init(client: StompManager) { self.client = client}
    
    func initialize () {
        client.initialize(delegate: self)
    }
    func destory () {
        client.destroy()
    }
    
    func send (message: String, type: MessageType = .MESSAGE) {
        guard let  uuid = UserDefaults.standard.string(forKey: DefaultKey.UUID.rawValue) else { return }
        let message = MessageBody(msg:message, type: type.rawValue, uuid: uuid)
//        let messageDict: [String:String] = ["msg": message, "type": type.rawValue, "uuid": uuid]
        do {
            let jsonData = try encoder.encode(message)
            guard let jsonString = String(data: jsonData, encoding: .utf8) else { return }
            client.send(message: jsonString)
        } catch {
            
        }
        
//        client.send(message: messageDict as AnyObject)
        
    }
}

extension ChatViewModel: StompClientLibDelegate {
    func stompClient(client: StompClientLib!, didReceiveMessageWithJSONBody jsonBody: AnyObject?, akaStringBody stringBody: String?, withHeader header: [String : String]?, withDestination destination: String) {
        if let body = jsonBody {
            
            let msg = body["msg"] as? String ?? ""
            let type = body["type"] as? String ?? ""
            let uuid = body["uuid"] as? String ?? ""
            Log.warning("INCOME >>>> msg \(msg) / type \(type) / uuid \(uuid)")
            
            chat.append(MessageBody(msg: msg, type: type, uuid: uuid))
        }
    }
    
    func stompClientDidDisconnect(client: StompClientLib!) {
        Log.warning(">>>>>>>> DISCONNECT")
    }
    
    func stompClientDidConnect(client: StompClientLib!) {
        Log.warning(">>>>>>>> CONNECT")
        self.client.subscribe()
    }
    
    func serverDidSendReceipt(client: StompClientLib!, withReceiptId receiptId: String) {
    }
    
    func serverDidSendError(client: StompClientLib!, withErrorMessage description: String, detailedErrorMessage message: String?) {
    }
    
    func serverDidSendPing() {
    }
}

