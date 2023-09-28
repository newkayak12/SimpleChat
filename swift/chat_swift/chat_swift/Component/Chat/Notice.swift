//
//  Notice.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import SwiftUI

struct Notice<Content>: View where Content: View {
    var content: () -> Content
    init(@ViewBuilder content: @escaping () -> Content) {
            self.content = content
    }
    
    var body: some View {
        HStack {
            GeometryReader { reader in
                content()
                    .frame(width: reader.size.width)
                    .padding(.vertical)
                    .foregroundColor(.white)
                    .background(Color.gray)
            }
        }
        
    }
}

#Preview {
    Notice() {
        GeometryReader { reader in
            Text("새로운 상대가 입장했습니다.")
                .frame(width: reader.size.width)
                .padding(.vertical)
                .background(Color.gray)
        }
    }
}
