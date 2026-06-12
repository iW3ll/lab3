import {TouchableOpacity, TouchableOpacityProps, Text} from "react-native"

import {styles} from "./styles"

interface FilterProps extends TouchableOpacityProps {
  title: string
  isActive?: boolean
}

export function Filter({title, isActive = false, ...rest}: FilterProps) {  
    return (
        <TouchableOpacity
            style={[styles.container, isActive && styles.containerActive]}
            {...rest}
        >   
            <Text style={[styles.title, isActive && styles.titleActive]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

