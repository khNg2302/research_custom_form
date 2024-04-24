import Group from "@/features/GroupPage/Group";
import GroupItem from "../types/Group/GroupItem";

const GroupPage = () => {
  const items: GroupItem[] = [
    {
      uuid: "1",
      type: "text",
      props: {
        content: "text item",
      },
    },
    {
      uuid: "2",
      type: "group",
      props: {
        items: [
          {
            uuid: "3",
            type: "text",
            props: {
              content: "text item",
            },
          },
          {
            uuid: "4",
            type: "group",
            props: {
              items: [
                {
                  uuid: "5",
                  type: "text",
                  props: {
                    content: "text item",
                  },
                },
                {
                  uuid: "6",
                  type: "text",
                  props: {
                    content: "text item",
                  },
                },
                {
                  uuid: "4",
                  type: "group",
                  props: {
                    items: [
                      {
                        uuid: "5",
                        type: "text",
                        props: {
                          content: "text item",
                        },
                      },
                      {
                        uuid: "6",
                        type: "text",
                        props: {
                          content: "text item",
                        },
                      },
                      {
                        uuid: "7",
                        type: "group",
                        props: {
                          items: [
                            {
                              uuid: "8",
                              type: "text",
                              props: {
                                content: "text item",
                              },
                            },
                            {
                              uuid: "9",
                              type: "text",
                              props: {
                                content: "text item",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ];
  return (
    <div>
      <h1>Group page</h1>
      <Group items={items} />
    </div>
  );
};

export default GroupPage;
