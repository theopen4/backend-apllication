class ToolsBox:

    def __init__(self):
        self.tools = []

    def add_tool(self, tool):
        self.tools.append(tool)  

    def remove_tool(self, tool):
        index = self.tools.index(tool)
        del self.tools[index]
        

