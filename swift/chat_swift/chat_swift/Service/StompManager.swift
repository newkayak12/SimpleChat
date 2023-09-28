//
//  Stomp.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import Foundation
import StompClientLib

class StompManager: ObservableObject {
    private static var instance: StompManager?
    private let client: StompClientLib
    private let uuid: String
    
    
    static let shared: StompManager = {
        if instance == nil {
            instance = StompManager()
        }
        return instance!;
    }()
    
    private init () {
        client = StompClientLib()
        uuid = UUID().uuidString
        UserDefaults.standard.setValue(uuid, forKey: DefaultKey.UUID.rawValue)
    }
    
    public func initialize ( delegate: StompClientLibDelegate ) {
        let handshake = Url.HANDSHAKE.rawValue
        
       
        if !client.isConnected(), let url = URL(string: handshake) {
            client.openSocketWithURLRequest(request: NSURLRequest(url: url), delegate: delegate)
        }
    }
    public func destroy () {
        client.unsubscribe(destination: Url.SUBSCRIBE.rawValue)
        client.disconnect()
    }
    
    public func subscribe () {
        if client.isConnected() {
            client.subscribe(destination: Url.SUBSCRIBE.rawValue)
        }
    }
    
    
    func send (message: AnyObject) {
        client.sendJSONForDict(dict: message,  toDestination: Url.MESSAGE.rawValue)
    }
    func send (message: String ) {
        client.sendMessage(message: message, toDestination: Url.MESSAGE.rawValue, withHeaders: nil, withReceipt: nil)
    }
    
}


