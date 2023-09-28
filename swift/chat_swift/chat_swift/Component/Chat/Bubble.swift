//
//  Bubble.swift
//  chat_swift
//
//  Created by Sang Hyeon kim on 9/28/23.
//

import SwiftUI

struct Bubble<Content>: View where Content: View {

    let direction: Direction
    let content: () -> Content
    init(direction: Direction, @ViewBuilder content: @escaping () -> Content) {
            self.content = content
            self.direction = direction
    }
    
    var formatter: DateFormatter = {
       var formatter = DateFormatter()
       formatter.dateFormat = "yyyy.MM.dd"
        
        return formatter
    }()
    
    func now () -> String {
        return formatter.string(from: Date())
    }
    
    var body: some View {
        VStack{
            HStack {
                if direction == .right {
                    Spacer()
                }
                content().clipShape(ChatBubbleShape(direction: direction))
                
                if direction == .left {
                    Spacer()
                }
            }.padding([(direction == .left) ? .leading : .trailing, .top,], 20)
                .padding((direction == .right) ? .leading : .trailing, 50)
            HStack {
                if direction == .right {
                    Spacer()
                }
                Text(now())
                .padding((direction == .left) ? .leading : .trailing, 40)
                .multilineTextAlignment(.trailing)
                .font(.caption2)
                if direction == .left {
                    Spacer()
                }
                
            }
        }.padding(.bottom, 20)
        
    }
}

struct Bubble_Previews: PreviewProvider {
    static var previews: some View {
        Bubble(direction: .right) {
            Text("Hello!")
            .padding(.all, 20)
            .foregroundColor(Color.white)
            .background(Color.blue)
        }
    }
}
