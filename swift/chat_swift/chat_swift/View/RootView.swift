//
//  ContentView.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 2023/09/20.
//

import SwiftUI

struct RootView: View {
    @EnvironmentObject var client: StompManager
    
    var body: some View {
        ChatView(viewModel: ChatViewModel(client: client))
    }
}

struct RootView_Previews: PreviewProvider {
    static var previews: some View {
        RootView()
    }
}
