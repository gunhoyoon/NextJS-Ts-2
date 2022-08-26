import React from "react";
import { Button, Divider, Header, Input, List } from "semantic-ui-react";

const about = () => {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40, marginLeft: 20 }} color="teal">
        회사 소개
      </Header>
      <Divider />
      <List style={{ height: 200 }}>
        <List.Item>
          {/*  */}
          <div>
            <List.Icon name="users">
              <List.Content>Semantic UI</List.Content>
            </List.Icon>
          </div>
          {/*  */}
          <div>
            <List.Icon name="marker">
              <List.Content> San Francisco, CA </List.Content>
            </List.Icon>
          </div>
          <div>
            <List.Icon name="mail">
              <List.Content>
                <a href="rkdus5964@gmail.com"> rkuds5964@gmail.com</a>
              </List.Content>
            </List.Icon>
          </div>
          <div>
            <List.Icon name="linkify">
              <List.Content>
                <a href="https://semantic-ui.com/">https://semantic-ui.com/</a>
              </List.Content>
            </List.Icon>
          </div>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40, marginLeft: 20 }} color="teal">
        문의사항
      </Header>
      <Divider />
      <Header as="h4" style={{ marginLeft: 10 }}>
        제목
      </Header>
      <Input
        type="text"
        style={{ height: 30, width: 200, marginLeft: 10 }}
      ></Input>

      <Header as="h4" style={{ marginLeft: 10 }}>
        내용
      </Header>
      <Input
        type="text"
        style={{ height: 50, width: 500, marginLeft: 10 }}
      ></Input>
      <div>
        <Button
          style={{ height: 50, width: 100, marginTop: 30, marginLeft: 10 }}
        >
          보내기
        </Button>
      </div>
      <Divider />
    </div>
  );
};

export default about;
