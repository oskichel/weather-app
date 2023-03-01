import React, { FC } from 'react'
import { Card, Space, Typography } from "antd"

type PlateProps = {
  text: string;
}
export const Plate: FC<PlateProps> = ({text}) => {
  const { Text } = Typography;
  return (
    <Card style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center'}}>
        <Text style={{fontSize: '24px'}}>{text}</Text>
    </Card>
  )
}