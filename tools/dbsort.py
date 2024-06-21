import os

if __name__ == '__main__':
    rootdir = os.path.dirname(os.path.dirname(__file__))
    data_file = os.path.join(rootdir, 'scripts', 'data.js')
    with open(data_file, 'r') as f:
        data = f.readlines()[2:-1]
        data.sort()
    with open(data_file, "w") as f:
        f.write("const nameDB =\n{\n")
        for line in data:
            f.write(line.replace("\'", "\""))
        f.write("}\n")
