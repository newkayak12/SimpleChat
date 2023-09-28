//
//  MessageBody.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import Foundation

struct MessageBody: Codable, Identifiable {
     public var id = UUID()
     public var msg:  String?
     public var type: String?
     public var uuid: String?
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.msg = try container.decodeIfPresent(String.self, forKey: .msg)
        self.type = try container.decodeIfPresent(String.self, forKey: .type)
        self.uuid = try container.decodeIfPresent(String.self, forKey: .uuid)
    }
    
    init(msg: String, type: String, uuid: String) {
        self.msg = msg
        self.type = type
        self.uuid = uuid
    }
    
}

