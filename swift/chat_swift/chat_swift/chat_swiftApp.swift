//
//  chat_swiftApp.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 2023/09/20.
//

import SwiftUI

@main
struct chat_swiftApp: App {
    var body: some Scene {
        WindowGroup {
            RootView()
                .environmentObject(StompManager.shared)
        }
    }
}
