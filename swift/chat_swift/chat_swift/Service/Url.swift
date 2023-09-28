//
//  Url.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import Foundation


public enum Url: String {
    case HANDSHAKE = "ws://localhost:1000/ws"
    case SUBSCRIBE = "/subscribe"
    case MESSAGE = "/send/message"
}
